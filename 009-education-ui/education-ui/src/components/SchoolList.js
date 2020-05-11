import React from 'react';
import PropTypes from 'prop-types';
import { Table, Col } from 'antd';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'City',
    dataIndex: 'cityState',
    key: 'cityState',
  },
];

const SchoolList = ({ schools }) => {
  return (
    <>
      <Col span={18} offset={3}>
        <Table
          dataSource={schools}
          columns={columns}
          rowKey="id"
          pagination={{ defaultPageSize: 20 }}
        />
      </Col>
    </>
  );
};

SchoolList.propTypes = {
  schools: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      cityState: PropTypes.string.isRequired,
      website: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default SchoolList;
