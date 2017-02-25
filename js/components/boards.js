<!doctype HTML>

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>Thinkful React Starter</title>

<link rel="stylesheet" href="css/index.css">

<!-- Your HTML goes here -->
<div>

<!--    Create a Board component in js/components/board.js that renders a <div> containing three Lists-->
export default class PersonList extends React.Component {
render() {
const Board = [];
for (let i=0; i<5; i++) {
Board.push(<Person />);
}
return (
<div className="person-list">
<li>numberOne</li>
<li>numberTwo</li>
<li>numberThree</li>
</div>
);
}
}


</div>
<script src="js/index.js"></script>
