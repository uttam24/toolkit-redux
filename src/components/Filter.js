import {useRef} from "react";
import {useDispatch} from "react-redux";
import {filterdUsers} from "../store/reducers/userReducers"

const Filter =()=>{
	const inputRef = useRef('');
	const dispatch = useDispatch();
	const filterUsers =()=>{	
		dispatch(filterdUsers(inputRef.current.value))
	}	
	return (
		<>
			<input 
			type="text" 
			name=""  
			className="form-control mb-3" 
			placeholder="Search user by name"
			ref={inputRef}
			onChange={filterUsers}
			/>
		</>
	)
}

export default Filter