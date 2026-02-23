export default function DataInTable({allUsers = []}){
    return allUsers.map((user) => (
        <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.age}</td>
            <td>{user.gender}</td>
            <td>{user.email}</td>
        </tr>
    ))
    
}