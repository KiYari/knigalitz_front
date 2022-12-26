import { Col, Grid, Row } from 'antd';
import Header from './header/Header';
import styles from './layout.module.css';


export default function Layout({children}) {
    return <Row className={styles.container}>
        <Header/>
            <Col span={6} className={styles.left}>
                <div className={styles.innerContainer}>
                    a
                </div></Col>
            
            <Col span={12} className={styles.center}>
                <div className={styles.innerContainer}>
                    {children}
                </div>
            </Col>

            <Col span={6} className={styles.right}>
                <div className={styles.innerContainer}>
                b
                </div>
            </Col> 
        </Row>
}