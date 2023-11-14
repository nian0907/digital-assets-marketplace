import { contractAddress } from "@/consts/parameters";
import {
  ConnectWallet,
  useContract,
  useContractMetadata,
  useNFT,
} from "@thirdweb-dev/react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  const { contract } = useContract(contractAddress);
  const { data: firstNFT, isLoading: nftLoading } = useNFT(contract, 0);
  const { data: contractMetadata, isLoading: contractLoading } =
    useContractMetadata(contract);

  return (
    <header className="mx-auto mb-12 flex w-full max-w-7xl items-center justify-between p-4">
      <Link to="/">
       <h1>Digital Assets Marketplace</h1>
      </Link>

      <div className="max-w-xs">
        <ConnectWallet />
      </div>
    </header>
  );
};
