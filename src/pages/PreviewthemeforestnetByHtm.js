import "./PreviewthemeforestnetByHtm.css";
import axios from "axios";
import React, { useState, useEffect } from 'react';

const PreviewthemeforestnetByHtm = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };
  
    fetchProducts();
  
    
  }, []);
  


  return (
    <div>
      <header className="header fixed-top" style={{ backgroundColor: "#262626" }}>
      <div className="container ">
       
      <div className="link fixed-top ">
        <img
          className="envato-market-dde916a48af7413e-icon "
          alt=""
          src="/envato-marketdde916a48af7413e54aa058fe7ae6856752fca799da4bec355f00aea904bfa19svg.svg"
        />
        <div className="envato-market">Envato Market</div>
        </div>
        <div className="row justify-content-end">
          <div className="col-2 py-2 ">
            <button type="button" className="btn btn-success button">Buy now</button>
          </div>
        </div>
      </div>
      
    </header>
    <div className="container-fluid row home-page">

    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <div className="col-8">
      </div>
      <div className="iframe">
        <div className="body">
          <div className="divebazar-layout">
            <div className="ml-4">
              <div className="nav">
                <div className="divinput-group">
                  <div className="input">
                    <div className="divplaceholder">
                      <div className="search">Search</div>
                    </div>
                  </div>
                  <img className="button-icon" alt="" src="/button.svg" />
                </div>
                <div className="">
                  <img className="" alt="" src="/link.svg" />
                  <img className="" alt="" src="/link1.svg" />
                  <img
                    className="link-image"
                    alt=""
                    src="/link--image@2x.png"
                  />
                  <div className="divdropdown">
                    <div className="divu-info">
                      <b className="john-quinn">John Quinn</b>
                      <div className="small-admin">Admin Profile</div>
                    </div>
                    <img
                      className="button-profile-av2a63d0b0s"
                      alt=""
                      src="/button--profile-av2a63d0b0svg.svg"
                    />
                  </div>
                  <div className="divnotifications">
                    <img className="link-icon2" alt="" src="/link2.svg" />
                    <div className="spanpulse-ring" />
                  </div>
                </div>
              </div>
              <div className="divcontainer-xxl">
                <div className="divrow">
                  <div className="divalert-success">
                    <div className="divd-flex">
                      <img
                        className="divavatar-icon"
                        alt=""
                        src="/divavatar.svg"
                      />
                      <div className="divflex-fill">
                        <div className="revenue">Revenue</div>
                        <div className="div">$18,925</div>
                      </div>
                    </div>
                  </div>
                  <div className="divalert-danger">
                    <div className="divd-flex">
                      <img
                        className="divavatar-icon"
                        alt=""
                        src="/divavatar1.svg"
                      />
                      <div className="divflex-fill">
                        <div className="expense">Expense</div>
                        <div className="div">$11,024</div>
                      </div>
                    </div>
                  </div>
                  <div className="divalert-warning">
                    <div className="divd-flex">
                      <img
                        className="divavatar-icon"
                        alt=""
                        src="/divavatar2.svg"
                      />
                      <div className="divflex-fill">
                        <div className="happy-clients">Happy Clients</div>
                        <div className="div2">8,925</div>
                      </div>
                    </div>
                  </div>
                  <div className="divalert-info">
                    <div className="divd-flex">
                      <img
                        className="divavatar-icon"
                        alt=""
                        src="/divavatar3.svg"
                      />
                      <div className="divflex-fill">
                        <div className="new-storeopen">New StoreOpen</div>
                        <div className="div2">8,925</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divrow1">
                  <div className="divtab-filter">
                    <div className="tablist">
                      <div className="tab">
                        <div className="today">Today</div>
                      </div>
                      <div className="tab-week">Week</div>
                      <div className="tab-month">Month</div>
                      <div className="tab-year">Year</div>
                    </div>
                    <div className="divinput-group1">
                      <div className="input1">
                        <div className="divdate-time-edit">
                          <div className="spinbutton-month">mm</div>
                          <div className="div4">/</div>
                          <div className="spinbutton-day">dd</div>
                          <div className="div5">/</div>
                          <div className="spinbutton-year">yyyy</div>
                        </div>
                      </div>
                      <img className="button-icon1" alt="" src="/button1.svg" />
                    </div>
                  </div>
                  <div className="tabpanel">
                    <div className="divcard">
                      <div className="divcard-body">
                        <div className="divleft-info">
                          <div className="today">Customers</div>
                          <b className="b">14,208</b>
                        </div>
                        <img className="icon" alt="" src="/icon.svg" />
                      </div>
                    </div>
                    <div className="divcard1">
                      <div className="divcard-body">
                        <div className="divleft-info1">
                          <div className="today">Order</div>
                          <b className="b">2314</b>
                        </div>
                        <img className="icon" alt="" src="/icon1.svg" />
                      </div>
                    </div>
                    <div className="divcard2">
                      <div className="divcard-body">
                        <div className="divleft-info">
                          <div className="today">Avg Sale</div>
                          <b className="b">$1770</b>
                        </div>
                        <img className="icon" alt="" src="/icon2.svg" />
                      </div>
                    </div>
                    <div className="divcard3">
                      <div className="divcard-body">
                        <div className="divleft-info">
                          <div className="today">Avg Item Sale</div>
                          <b className="b">185</b>
                        </div>
                        <img className="icon" alt="" src="/icon3.svg" />
                      </div>
                    </div>
                    <div className="divcard4">
                      <div className="divcard-body">
                        <div className="divleft-info">
                          <div className="today">Total Sale</div>
                          <b className="b">$35000</b>
                        </div>
                        <img className="icon" alt="" src="/icon4.svg" />
                      </div>
                    </div>
                    <div className="divcard5">
                      <div className="divcard-body">
                        <div className="divleft-info5">
                          <div className="today">Visitors</div>
                          <b className="b">11452</b>
                        </div>
                        <img className="icon" alt="" src="/icon5.svg" />
                      </div>
                    </div>
                    <div className="divcard6">
                      <div className="divcard-body">
                        <div className="divleft-info">
                          <div className="today">Total Products</div>
                          <b className="b">184511</b>
                        </div>
                        <img className="icon" alt="" src="/icon6.svg" />
                      </div>
                    </div>
                    <div className="divcard7">
                      <div className="divcard-body">
                        <div className="divleft-info">
                          <div className="today">Top Selling Item</div>
                          <b className="b">122</b>
                        </div>
                        <img className="icon" alt="" src="/icon7.svg" />
                      </div>
                    </div>
                    <div className="divcard8">
                      <div className="divcard-body">
                        <div className="divleft-info">
                          <div className="today">Dealership</div>
                          <b className="b">32</b>
                        </div>
                        <img className="icon" alt="" src="/icon8.svg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divcard9">
                  <b className="heading-6">Top Selling Product</b>
                  <div className="svg">
                    <div className="svgjssvg1001">
                      <div className="svgjsg1003">
                        <img className="svgjsrect1011-icon" alt="" />
                        <div className="svgjsg1066">
                          <div className="svgjsg1067">
                            <div className="svgjstext1068">70+</div>
                            <div className="svgjstext1070">56-70</div>
                            <div className="svgjstext1072">36-55</div>
                            <div className="svgjstext1074">21-35</div>
                            <div className="svgjstext1076">10-20</div>
                            <div className="svgjstext1078">0-9</div>
                          </div>
                          <img
                            className="svgjsline1080-icon"
                            alt=""
                            src="/svgjsline1080.svg"
                          />
                        </div>
                        <div className="svgjsg1045">
                          <div className="svgjsg1046">
                            <div className="svgjstext1047">5%</div>
                            <div className="svgjstext1050">3%</div>
                            <div className="svgjstext1053">1%</div>
                            <div className="svgjstext1056">1%</div>
                            <div className="svgjstext1059">3%</div>
                            <div className="svgjstext1062">5%</div>
                          </div>
                          <img
                            className="svgjsline1065-icon"
                            alt=""
                            src="/svgjsline1065.svg"
                          />
                        </div>
                        <img
                          className="svgjsg1081-icon"
                          alt=""
                          src="/svgjsg1081.svg"
                        />
                        <img
                          className="svgjsg1014-icon"
                          alt=""
                          src="/svgjsg1014.svg"
                        />
                        <img className="svgjsline1106-icon" alt="" />
                        <img className="svgjsline1106-icon" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divrow2">
                  <div className="divcol-xxl-8">
                    <div className="divcard10">
                      <b className="heading-6">Shopping Status</b>
                      <div className="svg1">
                        <div className="svgjssvg1111">
                          <div className="svgjsg1113">
                            <img className="svgjsline1117-icon" alt="" />
                            <div className="svgjsg1155">
                              <div className="svgjsg1156">
                                <div className="svgjstext1062">Sun</div>
                                <div className="svgjstext1161">Mon</div>
                                <div className="svgjstext1164">Tue</div>
                                <div className="svgjstext1167">Wed</div>
                                <div className="svgjstext1170">Thu</div>
                                <div className="svgjstext1173">Fri</div>
                                <div className="svgjstext1176">Sat</div>
                              </div>
                              <img
                                className="svgjsline1178-icon"
                                alt=""
                                src="/svgjsline1178.svg"
                              />
                            </div>
                            <img
                              className="svgjsg1180-icon"
                              alt=""
                              src="/svgjsg1180.svg"
                            />
                            <img
                              className="svgjsg1120-icon"
                              alt=""
                              src="/svgjsg1120.svg"
                            />
                            <img className="svgjsline1203-icon" alt="" />
                            <img className="svgjsline1203-icon" alt="" />
                            <img className="svgjsrect1208-icon" alt="" />
                            <img className="svgjsrect1208-icon" alt="" />
                          </div>
                          <img className="svgjsrect1116-icon" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="divcard10">
                      <b className="heading-6">Top Selling Product</b>
                      <div className="svg1">
                        <div className="svgjssvg1111">
                          <div className="svgjsg1212">
                            <img className="svgjsrect1220-icon" alt="" />
                            <div className="svgjsg1280">
                              <div className="svgjsg1281">
                                <div className="svgjstext1062">Jan</div>
                                <div className="svgjstext1286">Feb</div>
                                <div className="svgjstext1289">March</div>
                                <div className="svgjstext1292">Apr</div>
                                <div className="svgjstext1295">May</div>
                                <div className="svgjstext1298">Jun</div>
                                <div className="svgjstext1301">July</div>
                                <div className="svgjstext1304">Aug</div>
                                <div className="svgjstext1307">Sept</div>
                                <div className="svgjstext1310">Oct</div>
                                <div className="svgjstext1313">Nov</div>
                                <div className="svgjstext1316">Dec</div>
                              </div>
                              <img
                                className="svgjsline1318-icon"
                                alt=""
                                src="/svgjsline1318.svg"
                              />
                            </div>
                            <img
                              className="svgjsg1339-icon"
                              alt=""
                              src="/svgjsg1339.svg"
                            />
                            <img
                              className="svgjsg1223-icon"
                              alt=""
                              src="/svgjsg1223.svg"
                            />
                            <img className="svgjsline1363-icon" alt="" />
                            <img className="svgjsline1363-icon" alt="" />
                          </div>
                          <div className="svgjsg1319">
                            <div className="svgjsg1320">
                              <div className="svgjstext1062">200</div>
                              <div className="svgjstext1325">160</div>
                              <div className="svgjstext1328">120</div>
                              <div className="svgjstext1331">80</div>
                              <div className="svgjstext1334">40</div>
                              <div className="svgjstext1337">0</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divcard12">
                    <div className="div6">
                      <b className="heading-63">{`Our Branch Location & Revenue`}</b>
                      <div className="iframe1">
                        <div className="body1">
                          <div className="div7">
                            <img
                              className="staticmapservicegetmapimage-icon"
                              alt=""
                              src="/staticmapservicegetmapimage@2x.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="divlocation-revenue">
                      <b className="india">India</b>
                      <div className="divprogress">
                        <div className="progressbar" />
                      </div>
                      <b className="mauritius">Mauritius</b>
                      <div className="divprogress1">
                        <div className="progressbar1" />
                      </div>
                      <b className="colombia">Colombia</b>
                      <div className="divprogress2">
                        <div className="progressbar2" />
                      </div>
                      <b className="russia">Russia</b>
                      <div className="divprogress3">
                        <div className="progressbar3" />
                      </div>
                      <b className="france">France</b>
                      <div className="divprogress4">
                        <div className="progressbar4" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divrow3">
                  <div className="divcard13">
                    <b className="heading-64">Active Users Status</b>
                    <div className="divcard-body9">
                      <div className="divp-4">
                        <b className="b9">1345</b>
                      </div>
                      <div className="divtable-responsive">
                        <div className="table">
                          <div className="header-row">
                            <div className="cell">
                              <b className="active-pages">Active pages</b>
                            </div>
                            <div className="cell1">
                              <b className="active-pages">Users</b>
                            </div>
                          </div>
                          <div className="body2">
                            <div className="header-row">
                              <div className="data">
                                <div className="today">/dist/product.html</div>
                              </div>
                              <div className="data1">
                                <div className="today">245</div>
                              </div>
                            </div>
                            <div className="header-row">
                              <div className="data2">
                                <div className="today">
                                  /dist/product-cart.html
                                </div>
                              </div>
                              <div className="data3">
                                <div className="today">455</div>
                              </div>
                            </div>
                            <div className="header-row">
                              <div className="data4">
                                <div className="today">
                                  /dist/admin-profile.html
                                </div>
                              </div>
                              <div className="data5">
                                <div className="today">45</div>
                              </div>
                            </div>
                            <div className="header-row">
                              <div className="data6">
                                <div className="today">
                                  /dist/order-history.html
                                </div>
                              </div>
                              <div className="data3">
                                <div className="today">545</div>
                              </div>
                            </div>
                            <div className="header-row">
                              <div className="data8">
                                <div className="today">
                                  /dist/product-detail.html
                                </div>
                              </div>
                              <div className="data5">
                                <div className="today">55</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divcard14">
                    <b className="heading-64">Avg Expense Costs</b>
                    <div className="divcard-body10">
                      <div className="div13">$1105.5</div>
                      <div className="avg-expense-costs">
                        Avg Expense Costs All Month
                      </div>
                      <div className="svg3">
                        <div className="svgjssvg1368">
                          <div className="svgjsg1370">
                            <img className="svgjsrect1377-icon" alt="" />
                            <div className="svgjsg1438">
                              <div className="svgjsg1439">
                                <div className="svgjstext1062">Jan</div>
                                <div className="svgjstext1444">Feb</div>
                                <div className="svgjstext1447">March</div>
                                <div className="svgjstext1450">Apr</div>
                                <div className="svgjstext1453">May</div>
                                <div className="svgjstext1456">Jun</div>
                                <div className="svgjstext1459">July</div>
                                <div className="svgjstext1462">Aug</div>
                                <div className="svgjstext1465">Sept</div>
                                <div className="svgjstext1468">Oct</div>
                                <div className="svgjstext1471">Nov</div>
                                <div className="svgjstext1474">Dec</div>
                              </div>
                              <img
                                className="svgjsline1476-icon"
                                alt=""
                                src="/svgjsline1476.svg"
                              />
                            </div>
                            <img
                              className="svgjsg1478-icon"
                              alt=""
                              src="/svgjsg1478.svg"
                            />
                            <div className="svgjsg1380">
                              <img
                                className="svgjsg1381-icon"
                                alt=""
                                src="/svgjsg1381.svg"
                              />
                              <div className="svgjsg1382 ">
                                <div className="svgjsg1385">
                                  <b className="svgjstext1062">1131</b>
                                </div>
                                <div className="svgjsg1390">
                                  <b className="svgjstext1062">1180</b>
                                </div>
                                <div className="svgjsg1395">
                                  <b className="svgjstext1062">1114</b>
                                </div>
                                <div className="svgjsg1400">
                                  <b className="svgjstext1062">1109</b>
                                </div>
                                <div className="svgjsg1405">
                                  <b className="svgjstext1062">1112</b>
                                </div>
                                <div className="svgjsg1410">
                                  <b className="svgjstext1062">1016</b>
                                </div>
                                <div className="svgjsg1415">
                                  <b className="svgjstext1062">1317</b>
                                </div>
                                <div className="svgjsg1420">
                                  <b className="svgjstext1062">1213</b>
                                </div>
                                <div className="svgjsg1425">
                                  <b className="svgjstext1062">1014</b>
                                </div>
                                <div className="svgjsg1430">
                                  <b className="svgjstext1062">1199</b>
                                </div>
                                <div className="svgjsg1435">
                                  <b className="svgjstext1062">1251</b>
                                </div>
                              </div>
                            </div>
                            <img className="svgjsline1502-icon" alt="" />
                            <img className="svgjsline1502-icon" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divcard15">
                  <b className="heading-6">Recent Transactions</b>
                  <div className="divsc-dmrapn">
                    <div className="table1">
                    <div className="table-container">
                    <table className="table">
        <thead>
          <tr>
            <th className="col" style={{width:"2rem"}}>ID</th>
            <th className="col" style={{width:"14rem"}}>Title</th>
            <th className="col" style={{width:"7rem"}}>Image</th>
            <th className="col" style={{width:"6rem"}}>Category</th>
            <th className="col" style={{width:"30rem"}}>Description</th>
            <th className="col" style={{width:"6rem"}}>Price</th>
            <th className="col" style={{width:"4rem"}}>Rate</th>
            <th className="col" style={{width:"5rem"}}>Count</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
            
              <td className="col" style={{width:"2rem"}}>{product.id}</td>
              <td className="col" style={{width:"14rem"}}>{product.title}</td>
              <td className="col" style={{width:"7rem"}}>
                <img className="product-image" alt="" src={product.image} />
              </td>
              <td className="col" style={{width:"6rem"}}>{product.category}</td>
              <td className="col" style={{width:"30rem"}}>{product.description}</td>
              <td className="col" style={{width:"6rem"}}>{product.price}</td>
              <td className="col" style={{width:"4rem"}}>{product.rating.rate}</td>
              <td className="col" style={{width:"5rem"}}>{product.rating.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

                      
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           </div> 
            <div className="col-3">
            <div className="divmainsidemenu position-fixed pt-4 mt-5">
              <div className="divd-flex4">
                <div className="link1">
                  <img className="icon9" alt="" src="/icon9.svg" />
                  <b className="ebazar">eBazar</b>
                </div>
                <div className="list">
                  <div className="item-link">
                    <img className="icon10" alt="" src="/icon10.svg" />
                    <div className="dashboard">Dashboard</div>
                  </div>
                  <div className="item-link">
                    <img className="icon10" alt="" src="/icon11.svg" />
                    <div className="dashboard">Products</div>
                    <img className="icon12" alt="" src="/icon12.svg" />
                  </div>
                  <div className="item-link">
                    <img className="icon10" alt="" src="/icon13.svg" />
                    <div className="dashboard">Categories</div>
                    <img className="icon12" alt="" src="/icon14.svg" />
                  </div>
                  <div className="item-link">
                    <img className="icon10" alt="" src="/icon15.svg" />
                    <div className="dashboard">Orders</div>
                    <img className="icon12" alt="" src="/icon12.svg" />
                  </div>
                  <div className="item-link">
                    <img className="icon10" alt="" src="/icon16.svg" />
                    <div className="dashboard">Customers</div>
                    <img className="icon12" alt="" src="/icon14.svg" />
                  </div>
                  <div className="item-link">
                    <img className="icon10" alt="" src="/icon17.svg" />
                    <div className="dashboard">Sales Promotion</div>
                    <img className="icon12" alt="" src="/icon18.svg" />
                  </div>
                  <div className="item-link">
                    <img className="icon10" alt="" src="/icon19.svg" />
                    <div className="dashboard">Inventory</div>
                    <img className="icon12" alt="" src="/icon20.svg" />
                  </div>
                  <div className="item-link">
                    <img className="icon23" alt="" src="/icon21.svg" />
                    <div className="dashboard">Accounts</div>
                    <img className="icon12" alt="" src="/icon18.svg" />
                  </div>
                  <div className="item-link">
                    <img className="icon10" alt="" src="/icon22.svg" />
                    <div className="dashboard">App</div>
                    <img className="icon12" alt="" src="/icon20.svg" />
                  </div>
                  <div className="item-link">
                    <img className="icon10" alt="" src="/icon23.svg" />
                    <div className="dashboard">Store Locator</div>
                  </div>
                  <div className="item-link">
                    <img className="icon23" alt="" src="/icon24.svg" />
                    <div className="dashboard">UI Components</div>
                  </div>
                  <div className="item-link">
                    <img className="icon10" alt="" src="/icon25.svg" />
                    <div className="dashboard">Other Pages</div>
                    <img className="icon12" alt="" src="/icon18.svg" />
                  </div>
                </div>
                <img className="button-icon2" alt="" src="/button2.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  
  );
};

export default PreviewthemeforestnetByHtm;
