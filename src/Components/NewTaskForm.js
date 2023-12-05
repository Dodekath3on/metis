import React, { useState } from "react";

function AddTaskForm(){

    const [formData, setFormData]  = useState({
        // user_id: currentUser.id,
        name: "",
        due_date: "",
        status: "",
        assigned_to: "",
        project: "",
        priority: "",
        comments: "",
    })

    function handleFormChange(event){
        const name = event.target.name;
        let value = event.target.value

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    function handleAddTaskSubmit(event){
        
    }

    return(
        <div className="form" id="addtaskform">
            <form onSubmit={handleAddTaskSubmit}>
                <div class="field">
                <label style={{fontSize: 'large'}}>Task Name: </label>
                <input
                    type='text'
                    name='name'
                    onChange={handleFormChange}
                    value={formData.name}
                    placeholder="Enter Task name"
                />
                </div>
                <div class="field">
                <label style={{fontSize: 'large'}}>Due Date: </label>
                <input
                    type='text'
                    name='due_date'
                    onChange={handleFormChange}
                    value={formData.due_date}
                    placeholder="YYYY-MM-DD"
                />
                </div>
                <div class="field">
                <label style={{fontSize: 'large'}}>Assigned to: </label>
                <select type='select-one' name='assigned_to' onChange={handleFormChange} >
                <option value=""></option>
            {/* will need to get members as a prop and sort for project members above */}
                {projectMembers} 
                </select>
                </div>
                <div class="field">
                <label style={{fontSize: 'large'}}>Status: </label>
                <select type='select-one' name='status' onChange={handleFormChange} >
                <option value=""></option>
                <option value="Open">Open</option>
                <option value="In Progress">In Progress</option>
                <option value="Paused">Paused</option>
                <option value="Closed">Closed</option>
                </select>
                </div>
                <div class="field">
                <label style={{fontSize: 'large'}}>Project: </label>
                <select type='select-one' name='project' onChange={handleFormChange} >
                <option value=""></option>
                 {/* will need to get members as a prop and sort for user's projects above */}
                {myProjects}
                </select>
                </div>
                <div class="field">
                <label style={{fontSize: 'large'}}>Priority: </label>
                <select type='select-one' name='priority' onChange={handleFormChange} >
                <option value=""></option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
                </select>
                </div>
                <div class="field">
                <label style={{fontSize: 'large'}}>Comments: </label>
                <textarea className='commentbox'
                    type='text'
                    name='comments'
                    onChange={handleFormChange}
                    value={formData.comments}
                    placeholder="Enter your comments"
                />
                </div>
                <button color='blue' class='ui button' type='submit'>Create New Task</button>
            </form>
        </div>
    )
}

export default AddTaskForm;