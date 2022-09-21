import { Col, Image, Row } from "antd";
import "./viewBranch.style.less";

interface ViewBranch {
  branchData: any;
}
function ViewBranch({ branchData }: ViewBranch) {
  return (
    <div>
      <div className="viewBranch-container">
        <Row>
          <Col xs={24} xl={4}></Col>
          <Col xs={24} xl={16}>
            <Row>
              <Col xs={24} xl={8}></Col>
              <Col xs={24} xl={8}>
                <Image
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  style={{
                    borderRadius: "100px",
                    border: "1px solid blue",
                  }}
                />
              </Col>
              <Col xs={24} xl={8}></Col>
            </Row>
          </Col>
          <Col xs={24} xl={4}></Col>
        </Row>
        <Row style={{ marginTop: "5%" }}>
          <Col xs={24} xl={4}>
            {branchData.branchName}
          </Col>
          <Col xs={24} xl={16}>
            {branchData.branchLocation}
          </Col>
          <Col xs={24} xl={4}>
            {branchData.email}
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ViewBranch;
