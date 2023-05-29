import { withClasses } from 'helpers/stylesheet';
import { UIMessage } from 'i18n';
import Style from './DataTable.module.css';


const DataTable = ({className, data, ...props}) => {
	const [id, ...columns] = data.header;

	return (
		<div className={withClasses(Style.DataTable, className)}>
			<header>
				{columns.map(column => (
					<span key={`column_${column}`} className={Style.HeaderColumn}>
						{UIMessage(`column.name.${column}`)}
					</span>
				))}
			</header>
			<main>
				{data.rows.map(row => (
					<div key={row[id]} className={Style.Row}>
						{columns.map(column => (
							<span key={`rowColumn_${column}`} className={Style.RowColumn}>
								{row[column]}
							</span>
						))}
					</div>
				))}
			</main>
		</div>
	);
}

export default DataTable;