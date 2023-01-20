import '../categoriesform/categoriesform.css';
import { Form, Row, Col } from 'react-bootstrap';
import arrowUp from '../../res/img/arrow-up.png';
import arrowDown from '../../res/img/arrow-down.png';
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
	} = props.data;


	return (
		<div>
			<div className='shadow container-element'>
				<div id="Subject">
					<div style={{ paddingLeft: "20px", paddingRight: "20px" }} className="mb-4">
						<div className='category-line'>
							<h5 className="category-text">Subjects</h5>
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
							<h5 className="category-text">Tags</h5>
						</div>
					</div>
					<div className='mb-3' style={{width: "100%", marginLeft: "30px"}}>
						<Form.Check
								defaultChecked={true}
								inline
								label="At least one"
								name="group1"
								type="radio"
								onChange={() => {grouping_typeHandler("or")}}
							/>
						<Form.Check
							inline
							value={true}
							label="All together"
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
			<div className='mt-3'>
				<div style={{width: "100%"}}>
					<Row>
						<Col md="auto"><h5 style={{color: "white"}}>Sort by</h5></Col>
						<Col><img 
							width="30px"
							src = {sortDirection === '-' ? arrowUp : arrowDown}
							onClick={() => sortDirectionHandler()}
						/></Col>
					</Row>
				</div>
				<div style={{width: "100%"}} className="mt-2">
					<Form.Select style={{width: "100%", fontSize: "12px"}} size="sm" onClick={e => {sortsParamsCheckHandler(e.target.value)}}>
						{
							Object.keys(sortsParams).map(key => (
								<option>{sortsParams[key]}</option>
							)) 
						}
					</Form.Select>
				</div>
			</div>
		</div>
	)
}

export default СategoriesForm;