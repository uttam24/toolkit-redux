import {Link} from 'react-router-dom';

const User =({index, user})=>{
	return(
		<>
		<tr>
			<td>{index+1}</td>
			<td>{user.name}</td>
			<td>{user.username}</td>
			<td>{user.email}</td>
			<td><Link to={`/user/${user.id}`} className="btn btn-outline-success n">Details</Link></td>
		</tr>
		</>
	)
}

export default User