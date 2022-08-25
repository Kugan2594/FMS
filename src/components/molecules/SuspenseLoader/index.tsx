import { useEffect } from "react";
import NProgress from "nprogress";
import { Alert, Spin } from "antd";

function SuspenseLoader() {
    useEffect(() => {
        NProgress.start();

        return () => {
            NProgress.done();
        };
    }, []);

    return (
        <div>
            <Spin tip="Loading...">
                <Alert
                    message="Alert message title"
                    description="Further details about the context of this alert."
                    type="info"
                />
            </Spin>
        </div>
    );
}

export default SuspenseLoader;
