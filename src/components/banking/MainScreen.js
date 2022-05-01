import { NavBar } from '../ui/NavBar';
import { DepositCard } from '../ui/DepositCard';
import { TransferCard } from '../ui/TransferCard';
import { HistorialCard } from '../ui/HistorialCard';
import { UserInfo } from '../ui/UserInfo';

export const MainScreen = () => {
  return (
    <div>
      <NavBar />
      <div className="Wrapper">
        <div className="UserInfo__cont">
          <UserInfo />
          <div>
            <DepositCard />
            <TransferCard />
          </div>
        </div>
        <HistorialCard />
      </div>
    </div>
  );
};
