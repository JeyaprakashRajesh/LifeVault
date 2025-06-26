import React, {useState, useEffect} from 'react'
import Step1 from './components/Step1'
import Step2 from './components/Step2'
import Step3 from './components/Step3'
import Step4 from './components/Step4'


function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [allergies, setAllergies] = useState([]);
    const [abhaPhone, setAbhaPhone] = useState('');
    const [abhaId, setAbhaId] = useState('');
    const [abhaAddress, setAbhaAddress] = useState('');
    const [abhapin, setAbhaPin] = useState('');
    const [aadhaar, setAadhaar] = useState('');
    const [aadhaarPin, setAadhaarPin] = useState('');

    const [step, setStep] = useState(1);

  return (
    <div className='flex flex-row h-screen w-screen bg-gradient-to-r from-bgpurplefrom to-bgpurpleto p-[4%] gap-10'>
      <div className='flex flex-col w-1/2 h-full'>
        <div className='text-4xl font-semibold text-white '>LifeVault</div>
        <div></div>
      </div>
      <div className='flex flex-col w-1/2 h-full'>

      </div>
    </div>
  )
}

export default Signup
