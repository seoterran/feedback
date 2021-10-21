
import React,
{
  useEffect,
} from 'react';

import Box from '@mui/material/Box';
import API from '../Apis/feedback';
import { DataGrid } from '@mui/x-data-grid';

export default () => {
  const [rows, setRows] = React.useState([]);

  const populateTable = async () => {
    const feedbacks = await API.feedbacks.get()
    const data = feedbacks.map(feedback => {
      return {
        id: feedback._id,
        ...feedback
      }
    });
    setRows(data)
  }

  useEffect(() => {
    populateTable()
  });

  const columns = [
    {
      field: 'userId',
      headerName: 'User',
      width: 130,
      filterable: false,
      sortable: false
    },
    {
      field: 'sessionId',
      headerName: 'Session',
      width: 230,
      filterable: false,
      sortable: false
    },
    {
      field: 'rating',
      headerName: 'Rating',
      type: 'number',
      width: 130,
      sortable: false
    },
    {
      field: 'comment',
      headerName: 'Comment',
      width: 160,
      filterable: false,
      sortable: false
    },
  ];

  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        Ops Team View
      </Box>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </>
  );
}
