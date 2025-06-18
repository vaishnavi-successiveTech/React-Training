// "use client";
const TaskList=({ tasks })=> {
  return (
    <>
     <p style={{justifyContent:"center", alignItems:"center",display:"flex"}}> Task list is available</p>
      {tasks.map((element, index) => {
        return(
        <ul key={index} className="tasks">
          <li >{element}</li>
        </ul> 
           )
      })}
    </>
  );
}
export default TaskList;