import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
  fab: {
    margin: theme.spacing.unit,
  },
});

// const TaskTable = (props) => {
//   const { classes, rows } = props;
//
//   return (
//     <Paper className={classes.root}>
//       <Table className={classes.table}>
//         <TableHead>
//           <TableRow>
//             <CustomTableCell>Время</CustomTableCell>
//             <CustomTableCell align="right">Задача</CustomTableCell>
//             <CustomTableCell align="right">Приоритет</CustomTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map(row => (
//             <TableRow className={classes.row} key={row.id}>
//               <CustomTableCell component="th" scope="row">
//                 {row.time}
//               </CustomTableCell>
//               <CustomTableCell align="right">{row.name}</CustomTableCell>
//               <CustomTableCell align="right">{row.priority}</CustomTableCell>
//             </TableRow>
//           ))}
//           <TableRow className={classes.row}>
//             <CustomTableCell>
//               <Fab color="primary" aria-label="Add" className={classes.fab}>
//                 <AddIcon />
//               </Fab>
//             </CustomTableCell>
//           </TableRow>
//         </TableBody>
//       </Table>
//     </Paper>
//   );
// };
//
// TaskTable.propTypes = {
//   classes: PropTypes.object.isRequired,
//   rows: PropTypes.array,
// };
//
// export default withStyles(styles)(TaskTable);
// =======

function taskRows(classes, tasks) {
	if(tasks) {
		return tasks.map( (task) => {
			return (
				<TableRow className={classes.row} key={task.id}>
					<CustomTableCell component="th" scope="row">
						{task.expirationTime}
					</CustomTableCell>
					<CustomTableCell align="right">{task.taskName}</CustomTableCell>
					<CustomTableCell align="right">{task.priority}</CustomTableCell>
				</TableRow>
			);
		})
	}
	return (
			<TableRow className={classes.row}>
							<CustomTableCell component="th" scope="row" align="center">
								Task are not available!
							</CustomTableCell>
						</TableRow>
		);
}

function TaskList(props) {
	const { classes, tasks } = props;

	return (
		<Paper className={classes.root}>
			<Table className={classes.table}>
				<TableHead>
					<TableRow>
						<CustomTableCell>Время</CustomTableCell>
						<CustomTableCell align="right">Задача</CustomTableCell>
						<CustomTableCell align="right">Приоритет</CustomTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{ taskRows(classes, tasks) }
					<TableRow className={classes.row}>
						<CustomTableCell>
							<Fab color="primary" aria-label="Add" className={classes.fab}>
								<AddIcon />
							</Fab>
						</CustomTableCell>
					</TableRow>
				</TableBody>
			</Table>
		</Paper>
	);
}

TaskList.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TaskList);
