import '../categoriesform/categoriesform.css';
import { Form, Row, Col, Dropdown, SplitButton } from 'react-bootstrap';
import arrowUp from '../../res/img/arrow-up.svg';
import arrowDown from '../../res/img/arrow-down.svg';
import { getElById, getKeyByValue } from '../../datafunc';


const СategoriesForm = props => {
		//! ИСПРАВИТЬ

	const { sortsParams, tags, subjects } = props.data.informational_endpoint;
	const {
		sortDirection,
		tagCheckHandler,
		grouping_typeHandler,
		subjectsCheckHandler,
		sortsParamsCheckHandler,
		sortDirectionHandler,
		sortTitle,
	} = props.data;


	return (
		<div>
			<div className='mb-3 container-element shadow'>
				<div style={{width: "100%"}}>
					<div md="auto"><h5 style={{color: "black", marginLeft: "25px", paddingTop: "10px"}}>Сортировать по</h5></div>
				</div>
				<div className="mt-2 mb-2">
					<Row style={{padding: '10px'}}>
						<Col md="auto" style={{width: "81%"}}>
								<SplitButton variant="light"style={{width: "100%"}} title={sortTitle}>
									{
										Object.keys(sortsParams).map(key => (
											<Dropdown.Item id={sortsParams[key]} onClick={e => sortsParamsCheckHandler(e.target.id)}>{sortsParams[key]}</Dropdown.Item>
										)) 
									}
								</SplitButton>
						</Col>
						<Col md="auto" style={{width:"17%"}}><img 
							width="100%"
							src = {sortDirection === '-' ? arrowUp : arrowDown}
							style={{border: "1px rgba(19,87,102,1) solid", borderRadius: "5px"}}
							onClick={() => sortDirectionHandler()}
						/></Col>
					</Row>
				</div>
			</div>
			<div className='shadow container-element'>
				<div id="Subject">
					<div style={{ paddingLeft: "20px", paddingRight: "20px" }} className="mb-4">
						<div className='category-line'>
							<h5 className="category-text">Предметы</h5>
						</div>
					</div>
					<div className='pb-1'>
						{subjects.map((element, index) =>
							<div id={`subject-${element}-category`} className="category-element">
								<Form.Check 
									type="checkbox"
									id={`subject-${element}-switch`}
									label={element}
									onChange = {() => subjectsCheckHandler(index)}
								/>
							</div>
						)}
					</div>
				</div>
			</div>
			<div className='shadow container-element mt-3'>
				<div id="Subject">
					<div style={{ paddingLeft: "20px", paddingRight: "20px" }} className="mb-3">
						<div className='category-line'>
							<h5 className="category-text">Теги</h5>
						</div>
					</div>
					<div className='mb-3' style={{width: "100%", marginLeft: "20px"}}>
						<Form.Check
								defaultChecked={true}
								inline
								label="Хотя бы один"
								name="group1"
								type="radio"
								onChange={() => {grouping_typeHandler("or")}}
							/>
						<Form.Check
							inline
							value={true}
							label="Все одновременно"
							name="group1"
							type="radio"
							onChange={() => {grouping_typeHandler("and")}}
						/>
					</div>
					<div className='pb-1'>
						{tags.map((element, index) =>
							<div id={`tags-${element}-category`} className="category-element">
								<Form.Check 
									type="checkbox"
									id={`tags-${element}-switch`}
									label={element}
									onChange = {() => tagCheckHandler(index)}
								/>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default СategoriesForm;