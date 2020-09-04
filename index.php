<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="css/materialize.min.css">
  <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet">
  <title>Task List</title>
</head>

<body>
  <div class="container">
    <div class="row">
      <div class="col s12">
        <div id="main" class="card">
          <div class="card-content">
            <span class="card-title"><b>Task Input</b></span>

            <div class="row">
                    
              <form id="task-form">
                 
                <div class="input-field col s12">
                  <input type="text" name="task" id="task" placeholder="...Enter task name here:">
                </div>
            </div>
            <button type="submit" class="btn" id="add_task" name="add">Add Task</button>
            </form>
			<p id="para_para"></p>
          </div>

          <div class="card-action">
            <h5 id="task-title"><b>Tasks List</b></h5>
            <div class="input-field col s12">
            	<span>Search for specific tasks</span>
            	<input type="text" name="filter" id="filter" placeholder="Search for specific task using keyword...">
            </div>
            <ul class="collection">
              
              
            </ul>
            <a class="clear-tasks btn">Clear Tasks</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <script src="javascript/jquery-2.1.3.min.js"></script>
  <script src="javascript/materialize.min.js"></script>
  <script src="app.js"></script>
</body>

</html>