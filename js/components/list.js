<!doctype HTML>

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>Thinkful React Starter</title>

<link rel="stylesheet" href="css/index.css">

<!-- Your HTML goes here -->
<div>


<!--
Create a List component in js/components/list.js that renders a <div> containing three Cards

-->
export default class TotalCards extends React.Component {
render() {
const cards = [];
for (let i=0; i<4; i++) {
cards.push(<Card />);
}
return (
<li className="cards-list">
{people}
</li>
);
}
}


</div>
<script src="js/index.js"></script>
