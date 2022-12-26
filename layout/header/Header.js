import { PageHeader } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import styles from './header.module.css'


export default function Header({children}) {
    return <PageHeader className={styles.main}>
        {children}
    </PageHeader>
}