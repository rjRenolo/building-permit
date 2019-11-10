import React, { Component, Fragment } from 'react';
import styles from './BuildingPermit.module.css';
import { Typography, Button } from '@material-ui/core';
import MaterialTable from 'material-table';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

import AddIcon from '@material-ui/icons/Add';

class BuildingPermit extends Component {
  render() {
    return (
      <Fragment>
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'orange',
            paddingTop: '24px',
            paddingBottom: '24px'
          }}
        >
          <Typography variant="h2" gutterBottom>
            Municipal Engineer's Office
          </Typography>
          <Typography variant="h5">
            Building Permit Assessment Module
          </Typography>
        </div>
        <div className={styles.container}>
          <ThemeProvider theme={theme}>
            <div style={{ margin: '12px' }}>
              <Button
                color="secondary"
                variant="contained"
                style={{ color: 'white' }}
                startIcon={<AddIcon style={{ fontSize: '28px' }} />}
              >
                New Assessment
              </Button>
            </div>
          </ThemeProvider>
          <div style={{ background: 'pink', margin: '12px' }}>
            <MaterialTable
              title="Building Permit Assessment List"
              columns={[
                { title: 'ID', field: 'id' },
                { title: 'Occupancy Group', field: 'occupancy_group.name' },
                { title: 'Created On', field: 'created_on' },
                { title: 'Updated On', field: 'updated_on' },
                { title: 'Filing Fee', field: 'filing_fee', type: 'numeric' }
              ]}
              data={[
                {
                  id: 1,
                  created_on: '2019-11-06T11:19:21.991267Z',
                  updated_on: '2019-11-06T11:19:21.991308Z',
                  filing_fee: 0.0,
                  occupancy_group: {
                    id: 1,
                    name: 'Division A-1'
                  }
                },
                {
                  id: 2,
                  created_on: '2019-11-10T16:24:14.802543Z',
                  updated_on: '2019-11-10T16:24:14.802588Z',
                  filing_fee: 0.0,
                  occupancy_group: {
                    id: 5,
                    name: 'Division C-2'
                  }
                },
                {
                  id: 2,
                  created_on: '2019-11-10T16:24:14.802543Z',
                  updated_on: '2019-11-10T16:24:14.802588Z',
                  filing_fee: 0.0,
                  occupancy_group: {
                    id: 5,
                    name: 'Division C-2'
                  }
                },
                {
                  id: 2,
                  created_on: '2019-11-10T16:24:14.802543Z',
                  updated_on: '2019-11-10T16:24:14.802588Z',
                  filing_fee: 0.0,
                  occupancy_group: {
                    id: 5,
                    name: 'Division C-2'
                  }
                },
                {
                  id: 2,
                  created_on: '2019-11-10T16:24:14.802543Z',
                  updated_on: '2019-11-10T16:24:14.802588Z',
                  filing_fee: 0.0,
                  occupancy_group: {
                    id: 5,
                    name: 'Division C-2'
                  }
                },
                {
                  id: 2,
                  created_on: '2019-11-10T16:24:14.802543Z',
                  updated_on: '2019-11-10T16:24:14.802588Z',
                  filing_fee: 0.0,
                  occupancy_group: {
                    id: 5,
                    name: 'Division C-2'
                  }
                },
                {
                  id: 2,
                  created_on: '2019-11-10T16:24:14.802543Z',
                  updated_on: '2019-11-10T16:24:14.802588Z',
                  filing_fee: 0.0,
                  occupancy_group: {
                    id: 5,
                    name: 'Division C-2'
                  }
                },
                {
                  id: 2,
                  created_on: '2019-11-10T16:24:14.802543Z',
                  updated_on: '2019-11-10T16:24:14.802588Z',
                  filing_fee: 0.0,
                  occupancy_group: {
                    id: 5,
                    name: 'Division C-2'
                  }
                }
              ]}
              actions={[
                {
                  icon: 'edit',
                  tooltip: 'Edit Assessment',
                  onClick: (event, rowData) => alert('You saved ' + rowData.id)
                }
              ]}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default BuildingPermit;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#02A8E8'
    },
    secondary: green
  }
});
