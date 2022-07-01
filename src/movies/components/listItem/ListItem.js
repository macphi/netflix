import React, { } from 'react';
import { Row, Col } from 'antd'


import './listItem.scss'

const ListDataMovies = (movies) => {
    return (
        <div className="item">
            <Row >
                <Col span={6}>
                    <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" ></img>
                    <div className="title">
                        <span>Europe Street beat</span>
                    </div>
                    <div className="desc">
                        <span>123</span>
                    </div>
                </Col>
            </Row><Row >
                <Col span={6}>
                    <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" ></img>
                    <div className="title">
                        <span>Europe Street beat</span>
                    </div>
                    <div className="desc">
                        <span>123</span>
                    </div>
                </Col>
            </Row><Row >
                <Col span={6}>
                    <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" ></img>
                    <div className="title">
                        <span>Europe Street beat</span>
                    </div>
                    <div className="desc">
                        <span>123</span>
                    </div>
                </Col>
            </Row><Row >
                <Col span={6}>
                    <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" ></img>
                    <div className="title">
                        <span>Europe Street beat</span>
                    </div>
                    <div className="desc">
                        <span>123</span>
                    </div>
                </Col>
            </Row>
        </div>


    )







}
export default React.memo(ListDataMovies)