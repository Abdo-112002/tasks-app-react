import { Button } from 'antd'
import { ReactNode } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DButton = ({ text, icon, ...props }: { text: string, icon?: ReactNode, [key: string]: string | any }) => {
    return (
        <Button
            type="primary"
            className="bg-slate-800 hover:!bg-slate-600"
            block
            icon={icon}
            size="large"
            {...props}
            htmlType="submit">
            {text}
        </Button>
    )
}

export default DButton
