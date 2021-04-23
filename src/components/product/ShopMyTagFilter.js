import PropTypes from "prop-types";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import React, { Fragment, useState, useEffect } from "react";
import Backend from '../../@utils/BackendUrl';
import axios from 'axios';

const ShopMyTagFilter = ({setSortedProducts}) => {
    const [products, setProducts] = useState([]);
    const [menus, setMenus] = useState([]);
    const [subMenus, setSubMenus] = useState([]);
    const [checkedMenus, setCheckedMenus] = useState([]);
    const [checkedSubMenus, setCheckedSubMenus] = useState([]);

    useEffect(() => {
        const init = async () => {       
            
            let platinum = 'off';

            const user = await axios.post(Backend.URL + '/check_login', {params: 'check_login'}, { withCredentials: true, headers: {"Access-Control-Allow-Origin": "*"} });
            
            if(user.data.status === 'success') {
                let user_data = user.data.data[0][0];
                if (user_data.membership === 'platinum') {
                    platinum = 'on';
                }
            }

            const res = await axios.post(Backend.URL + '/get_submenu_o', {data:0}, { withCredentials: true, headers: {"Access-Control-Allow-Origin": "*"} });
            setSubMenus(res.data);
            const resp = await axios.post(Backend.URL + '/get_menu_o', {data: 0}, { withCredentials: true, headers: {"Access-Control-Allow-Origin": "*"} });
            setMenus(resp.data);
            const respo = await axios.post(Backend.URL + '/get_products', {platinum: platinum}, { withCredentials: true, headers: {"Access-Control-Allow-Origin": "*"} });
            setProducts(respo.data);
        }
        init();
    }, []);
    const handleMenuChange = (e, checked) => {
        if(checked){
            if(!(checkedMenus.includes(e.target.value))){
                setCheckedMenus([...checkedMenus, e.target.value]);
            }
        } else {
            if(checkedMenus.includes(e.target.value)) {
                let index = checkedMenus.indexOf(e.target.value);
                if (index !== -1) {
                    checkedMenus.splice(index, 1);
                }
                setCheckedMenus(checkedMenus);
            }
        }
    };

    const handleSubMenuChange = (e, checked) => {
        if(checked){
            if(!(checkedSubMenus.includes(e.target.value))){
                setCheckedSubMenus([...checkedSubMenus, e.target.value]);
            }
        } else {
            if(checkedSubMenus.includes(e.target.value)) {
                let index = checkedSubMenus.indexOf(e.target.value);
                if (index !== -1) {
                    checkedSubMenus.splice(index, 1);
                }
                setCheckedSubMenus(checkedSubMenus);
            }
        }
    };

    const productFilter = () => {
        let result = products.filter(product => {
            if(checkedMenus.includes(product.main_menu.toString())){
                if(checkedSubMenus.includes(product.sub_menu.toString())){
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        });
        setSortedProducts(result);
    }

    const toggleShopTopFilter = e => {
        const shopTopFilterWrapper = document.querySelector(
          "#product-filter-wrapper"
        );
        shopTopFilterWrapper.classList.toggle("active");
        if (shopTopFilterWrapper.style.height) {
          shopTopFilterWrapper.style.height = null;
        } else {
          shopTopFilterWrapper.style.height =
            shopTopFilterWrapper.scrollHeight + "px";
        }
        e.currentTarget.classList.toggle("active");
    };

  return (
    <Fragment>
        <div className="shop-top-bar mb-35">
            <div className="select-shoing-wrap">
                <p>
                   Result
                </p>
            </div>

            <div className="filter-active">
                <button onClick={e => toggleShopTopFilter(e)}>
                    <i className="fa fa-plus"></i> filter
                </button>
            </div>
        </div>

        <div className="product-filter-wrapper" id="product-filter-wrapper">
            <div className="product-filter-wrapper__inner">
                <div className="row">
                {/* Product Filter */}
                    <div className="col-md-3 col-sm-6 col-xs-12 mb-30">
                        <div className="product-filter">
                            <h5>Menus</h5>
                            
                            <div style={{width: '' + menus.length * 200 + 'px' }}>
                                {menus.map(menu => {
                                    return (
                                        <div key={menu.id}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name={menu.name}
                                                        color="primary"
                                                    />
                                                }
                                                label={menu.name}
                                                onChange={handleMenuChange}
                                                value={menu.id}
                                            />
                                        </div>
                                    )
                                } )}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 mb-30">
                        <div className="product-filter">
                            <h5>Sub Menus</h5>
                            
                            <div style={{width: '' + subMenus.length * 200 + 'px' }}>
                                {subMenus.map(submenu => {
                                    return (
                                        <div key={submenu.id}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name={submenu.name}
                                                        color="primary"
                                                    />
                                                }
                                                label={submenu.name}
                                                onChange={handleSubMenuChange}
                                                value={submenu.id}
                                            />
                                        </div>
                                    )
                                } )}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 mb-30">
                        <div className="product-filter">
                            <h5>Tags</h5>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 mb-30">
                        <div className="product-filter">
                            <Button variant="contained" style={{color:"#fff",backgroundColor:"#587175"}} onClick={e => productFilter(e)}>
                                Filter
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      {/* shop top filter */}
      {/* <ShopTopFilter products={products} getSortParams={getSortParams} /> */}
    </Fragment>
  );
};

ShopMyTagFilter.propTypes = {
  getFilterSortParams: PropTypes.func,
  getSortParams: PropTypes.func,
  productCount: PropTypes.number,
  products: PropTypes.array,
  sortedProductCount: PropTypes.number
};

export default ShopMyTagFilter;
