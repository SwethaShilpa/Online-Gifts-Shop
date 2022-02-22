import React, {useState, useEffect} from 'react';
import axios from 'axios';
import p1 from '../../assets/images/p1.png';
import p2 from '../../assets/images/p2.png';
import p3 from '../../assets/images/p3.png';
import p4 from '../../assets/images/p4.png';
import p5 from '../../assets/images/p5.png';
import p6 from '../../assets/images/p6.png';
import p7 from '../../assets/images/p7.png';
import p8 from '../../assets/images/p8.png';

export default function Shop() {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(null);
    const [showLoad, setShowLoad] = useState(true);
    const [customPageSize, setCustomPageSize] = useState(1);
    const [fulldata, setfullData] = useState([]);

    useEffect(() => {
        setData([]);
        getData();
    }, []);

    const getData = () => {
        setLoading(true);
        axios.get(`https://61e65bc1ce3a2d00173590d5.mockapi.io/productslist`).then(data => {
            setfullData(data.data)
            const pageRes = paginator(data.data, customPageSize, 4)
            setData(pageRes.data);
            setLoading(false);
        })
    }  

    function paginator(items, current_page, per_page_items) {
        let page = current_page || 1,
        per_page = per_page_items || 10,
        offset = (page - 1) * per_page,
        paginatedItems = items.slice(offset).slice(0, per_page_items),
        total_pages = Math.ceil(items.length / per_page);
        return {
            page: page,
            per_page: per_page,
            pre_page: page - 1 ? page - 1 : null,
            next_page: (total_pages > page) ? page + 1 : null,
            total: items.length,
            total_pages: total_pages,
            data: paginatedItems
        };
    }    

    const onLoadMore = () => {
        var pageNo = customPageSize + 1;
        const pageResult = paginator(fulldata, pageNo, 4);
        setCustomPageSize(pageNo)
        var pageDatas = pageResult.data;
        if(pageDatas.length > 0) {
            setData([...data, ...pageDatas]);
        } else {
            setShowLoad(false)
        }
    }
    
    return (
        <>
            <section class="shop_section layout_padding">
                <div class="container">
                <div class="heading_container heading_center">
                    <h2> Latest Products </h2>
                </div>
                <div class="row">
                    {data && data.length > 0 && data.map((item) => {
                            return (
                                <div class="col-sm-6 col-md-4 col-lg-3">
                                    <div class="box">
                                        <a href="/">
                                            <div class="img-box">
                                                <img src={p2} alt=""/>
                                            </div>
                                            <div class="detail-box">
                                                <h6> {item.title} </h6>
                                                <h6> Price <span> $ {item.price} </span> </h6>
                                            </div>
                                            <div class="new">
                                                <span> New </span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            )                        
                        })
                    }
                </div>
                <div class="btn-box">
                    {data && data.length > 0 && showLoad === true && 
                        <a href="#" class="load_more text-center" onClick={(e) => {onLoadMore()}}>View All Products</a>
                    }
                </div>
                </div>
            </section>
        </>
    );
}
