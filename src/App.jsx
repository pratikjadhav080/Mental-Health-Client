
import './App.css';
import { Game } from './components/Game';
import { Landing } from './components/Landing';
import { Meditate } from './components/Meditate';
import { Diary } from './components/Diary';
import { Game1 } from './components/Game1';
import { Diary1 } from './components/Diary1';
import { Meditate1 } from './components/Meditate1';
import { Signup } from './components/Signup';
import { Welcome } from "./components/Welcome"
import { Goodbad } from "./components/Goodbad"
import { Goal } from './components/Goal';
import { Games } from "./components/Games"
import { Bluetooh } from "./components/Bluetooh"
import { Funtest } from './components/Funtest';
import { Waterfall } from './components/Waterfall';
import { Colors } from './components/Colors';
import { Personality } from './components/Personality';
import { Avatar } from './components/Avatar';
import { Landing1 } from './components/Landing1';
import { Login } from './components/Login';
import { Onboarding } from './components/Onboarding';
import { DailyTask } from './components/Daily-task';
import { Switch, Route } from 'react-router-dom'
import { Loadingpage } from './components/Loadingpage';
import { Allsettogo } from './components/Allsettogo';
import { ScoreCard } from './components/ScoreCard';
import { Therapies } from './components/Therapy';
import { MeditateCrousel } from './components/Meditate-carousel';
import { Doctors } from './components/Doctorspage';
import { Vrinsitu } from './components/Vrinsitu';
import { GamesCrousel } from './components/Games-crousel';
import { Individualdoctor } from './components/IndividualDoc';
import { Categories } from './components/Categories';
import { Postshow } from './components/Postshow';
import { Individualpost } from './components/IndividualPost';
import { Bookingcomplete } from "./components/Bookingcomplete"
import { TherapistAppointment } from './components/Therapistappointment';
import { Welcomegif } from "./components/Welcomegif";
import { Community } from './components/Community';
import { Book } from './components/BookingPage';
import { Cardpayment } from './components/Cardpayment';
import { Otpverification } from './components/Otpverification';
import { Createpost } from './components/Createpost';
import { Mprofile } from './components/M-profile';

function App() {
  return (
    <div className="App">

        <Switch>
        <Route path="/" exact>
          <Onboarding />
        </Route>

        <Route path="/welcome"><Welcome></Welcome></Route>

        <Route path="/signup"><Signup></Signup></Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/blueaura">
          <Goodbad />
        </Route>

        <Route path="/goal">
          <Goal />
        </Route>

        <Route path="/funtest">
          <Funtest />
        </Route>

        <Route path="/colors">
          <Colors />
        </Route>

        <Route path="/loadingpage">
          <Loadingpage />
        </Route>

        <Route path="/createavatar">
          <Avatar />
        </Route>

        <Route path="/allset">
          <Allsettogo />
        </Route>

        <Route path="/landingpage">
          <Landing />
        </Route>

        <Route path="/welcome">
          <Welcome></Welcome>
        </Route>

        <Route path="/therapy">
          <Therapies />
        </Route>

        <Route path="/doctors/:id">
          <Doctors />
        </Route>

        <Route path="/individualdoctor/:id">
          <Individualdoctor />
        </Route>

        <Route path="/community">
        <Community></Community>
        </Route>

        <Route path="/posttheissue">
        <Createpost/> 
        </Route>

        <Route path="/categories">
          <Categories />
        </Route>

        <Route path="/postshow/:id">
          <Postshow />
        </Route>

        <Route path="/individualpost/:id">
          <Individualpost />
        </Route>

        <Route path="/booking/:id">
          <Book />
        </Route>

        <Route path="/therapistappointment">
          <TherapistAppointment />
        </Route>

        <Route path="/cardpayment">
          <Cardpayment />
        </Route>

        <Route path="/otppage">
          <Otpverification />
        </Route>

        <Route path="/processing">
          <Welcomegif />
        </Route>

        <Route path="/bookingcomplete">
          <Bookingcomplete />
        </Route>
       <Route path="/games-home">
         <Game/>
       </Route>
        <Route path="/games">
          <GamesCrousel />
        </Route>
        <Route path="/games-play">
          <Games></Games>
        </Route>
        <Route path="/games-scorecard">
        <ScoreCard />
        </Route>
        <Route path="/meditate-home">
          <Meditate/>
        </Route>
        <Route path="/meditate">
          <MeditateCrousel />
        </Route>
        <Route path="/vr-insitu">
          <Vrinsitu />
        </Route>
        <Route path="/naturevideo">
          <Waterfall />
        </Route>
        <Route path="/home-page">
          <Landing />
        </Route>
        <Route path="/daily-task-page">
          <DailyTask />
        </Route>
        
        <Route path="/myprofile">
        <Mprofile/> 
        </Route>
        
      </Switch>
    
    
      


      {/*   
            <Diary1 />
      <Diary />
        <Meditate />
      
      <Game />
      <Game1 />
      <Landing1 />
      <Mprofile />    
      <Bluetooh></Bluetooh>
      <Personality />
      <DailyTask />
      <Prakash></Prakash>  
      <Bookingcomplete></Bookingcomplete>
      <TherapistAppointment />
      <Cardpayment />
      < Otpverification />

      <Prakash></Prakash>
      <TherapistAppointment />
      <Cardpayment />
      <Otpverification />

     <MeditateCrousel/>
  
      <Community></Community>
       <Createpost/> */}
    </div>

  );
}

export default App;