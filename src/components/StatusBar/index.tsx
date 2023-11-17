import { BsReception4, BsWifi, BsBatteryFull } from 'react-icons/bs';

function StatusBar() {
  return (
    <div className="statusbar flex flex-row justify-between items-center h-10 px-3 bg-white">
      <p className="pl-5 font-bold">9:42</p>

      <div className="flex justify-center gap-1">
        <BsReception4 />
        <BsWifi />
        <BsBatteryFull />
      </div>
    </div>
  );
}

export default StatusBar;
