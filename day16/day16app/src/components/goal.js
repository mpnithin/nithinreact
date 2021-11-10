import React from 'react';
import './goal.css'
function MissedGoal() {
	return <h1 className="missed-goal">AH! GOAL MISSED!</h1>; }
function MadeGoal() {
	return <h1 className="made-goal">WOW! GOAL!</h1>; }
function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal/>; }
  return <MissedGoal/>; 
}

export default Goal;
