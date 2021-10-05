import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useRef, useEffect} from 'react';
import {getUsers} from "../store/actions/userAction"
/*import {addUser} from "../store/reducers/userReducers"
*/
import User from "../components/User";
import Loader from "../components/Loader";
import Filter from "../components/Filter";

const Home =()=>{
	const {users, loader} = useSelector((state)=> state.users);
	const dispatch = useDispatch();

	useEffect(()=>{
		dispatch(getUsers())
	}, []);
	/*const inputRef = useRef(''); */
/*	const storeUser =(e)=>{
		e.preventDefault();
		console.log(inputRef.current.value);
		dispatch(addUser(inputRef.current.value));
		inputRef.current.value='';
	}*/
	return (
		/*<form onSubmit={storeUser}>
			<input type="text" nae="" placeholder="Add user" ref={inputRef}/><br/><br/>
			<input type="submit" value="Add User"/>
		</form>*/
		!loader ? <>
		<Filter/>
		<table className="table table-hover">
			<thead>
				<tr>
					<th>Sno</th>
					<th>Name</th>
					<th>Username</th>
					<th>Email</th>
					<th>Delete</th>
				</tr>
			</thead>
			<tbody>
				{users.map((user, index) =>(
						<User key={index} index={index} user={user}/>
					))}
			</tbody>
		</table> 

		</>:<Loader/>
	);
};

export default Home;