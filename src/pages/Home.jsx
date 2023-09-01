import React from 'react'

const Home = () => {
  return (
    <div className='mt-4 w-full h-full flex justify-center mb-4'>
      <div className="home-div w-[90%] shadow-black shadow-sm rounded-sm p-4 flex flex-col md:flex-row">
        <div className="first-div w-full md:w-[50%] h-fit">
          <img src="https://images.pexels.com/photos/5717454/pexels-photo-5717454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="todo" className='w-[100%] h-[90%] md:h-[80%] md:w-[95%]' />
        </div>
        <div className="second-div w-full md:w-[50%] flex flex-col space-y-6">
          <p className="text-xl">A ToDo list, often referred to as a task list or checklist, is a powerful tool for organizing and managing your daily activities and responsibilities. Here are eight point descriptions highlighting its key features and benefits:</p>
          <ol className='ordered-list space-y-2'>
            <li><strong>1.Task Organization:</strong> A ToDo list helps you organize your tasks, ensuring that you have a clear overview of what needs to be done.</li>
            <li><strong>2.Prioritization:</strong> It allows you to prioritize tasks based on their importance and deadlines, helping you focus on what matters most.</li>
            <li><strong>3.Time Management:</strong> ToDo lists enable effective time management by allocating time slots for each task, making it easier to plan your day.</li>
            <li><strong>4.Goal Tracking:</strong> They help you track progress toward your goals, ensuring that you stay on course and complete tasks that contribute to your objectives</li>
            <li><strong>5.Reduced Stress:</strong> By capturing all your tasks in one place, ToDo lists reduce mental clutter and alleviate stress associated with forgetting important tasks.</li>
            <li><strong>6.Accountability:</strong> Sharing your ToDo list with others can promote accountability in team projects or household chores, as everyone knows their responsibilities.</li>
            <li><strong>7.Flexibility:</strong> ToDo lists are adaptable and can be easily adjusted as new tasks arise or priorities change throughout the day.</li>
            <li><strong>8.Sense of Achievement:</strong> Checking off completed tasks on your list gives a sense of accomplishment and motivation to tackle more items.</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Home;
