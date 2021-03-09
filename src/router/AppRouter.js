import React from 'react';
import {BrowserRouter,Redirect,Route,Switch} from 'react-router-dom';
import Header from '../components/Header';
/*
import HomePage from '../components/HomePage';
import PageNotFound from '../components/PageNotFound';
*/

import ShowStories from '../components/ShowStories';
import  {navMenu} from '../components/DummyData';

const menuData = navMenu.map(menu =>( menu.location ));
/*
console.log(menuData);
*/
const AppRouter =() =>
 {
   

    return (

     


        <BrowserRouter>
            <div className="container">
     
            <Header />
              <Switch>
            <Route path="/" render={() => <Redirect to="/top" />} exact={true} />
            <Route 
            path="/:type"
            render={({ match }) => {
              const { type } = match.params;
              
              if(!menuData.includes(type)){
                return <Redirect to="/" />;
              }
              return <ShowStories type={type} />;
            }} />

              { /* <Route path="/" component={HomePage} exact={true} />
              <Route component={PageNotFound} /> */}
              </Switch>
            </div>
        
        
        </BrowserRouter>
    
    );
}

export default AppRouter
