import { Fragment, useEffect } from "react";
import { LoadingBar } from "react-redux-loading-bar";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import Login from "./Login/login";
import PrivateRoute from "./ProtectedRoute";
import "./App.css";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard/Dashboard";
import Nav from "./Navbar/Navbar";
import { setAuthedUser } from "../actions/authedUser";
import NewPoll from "./NewPoll/Newpoll";
import Leaderboard from "./Leaderboard/Leaderboard";
import PollResult from "./PollResult/PollResult";
import PollForm from "./PollForm/PollForm";
import PageNotFound from "./PageNotFound/PageNotFound";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  });

  const logOut = () => {
    props.dispatch(setAuthedUser(''))
  }

  return (
    <Fragment>
      <LoadingBar />
      <div className="app-container">
      {
        props.authedUser ? <Nav currentUser={props.loggedInUser.name} logOut={logOut}/> : null
      }
        {props.loading === true ? null : (
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoute user={props.authedUser} />}>
              <Route exact path="/" element={<Dashboard />} />
              <Route exact path="/add" element={<NewPoll />} />
              <Route exact path="/leaderboard" element={<Leaderboard />} />
              <Route exact path="/questions/:id" element={<PollForm />}/>
              <Route exact path="/questions/:id/result" element={<PollResult />}/>
            </Route>
            <Route path="*" element={<PageNotFound />}/>
          </Routes>
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser, users }) => ({
  loading: JSON.stringify(users) === JSON.stringify({}),
  loggedInUser: users[authedUser],
  authedUser,
});

export default connect(mapStateToProps)(App);
