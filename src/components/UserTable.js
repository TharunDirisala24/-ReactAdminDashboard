import React,{useState} from "react";

function UserTable(){

const users=[
{name:"John",email:"john@gmail.com"},
{name:"David",email:"david@gmail.com"},
{name:"Rahul",email:"rahul@gmail.com"},
{name:"Smith",email:"smith@gmail.com"},
{name:"Tharun",email:"tharun@gmail.com"}
]

const [search,setSearch]=useState("");

const filteredUsers=users.filter(user =>
user.name.toLowerCase().includes(search.toLowerCase())
);

return(

<div className="card p-3 shadow">

<h4>User List</h4>

<input
className="form-control mb-3"
placeholder="Search user"
onChange={(e)=>setSearch(e.target.value)}
/>

<table className="table">

<thead>
<tr>
<th>Name</th>
<th>Email</th>
</tr>
</thead>

<tbody>

{filteredUsers.map((u,i)=>(
<tr key={i}>
<td>{u.name}</td>
<td>{u.email}</td>
</tr>
))}

</tbody>

</table>

</div>

)

}

export default UserTable;