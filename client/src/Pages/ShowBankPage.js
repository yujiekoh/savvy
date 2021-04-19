import React from 'react';
import { useParams } from "react-router";
import { useStateValue } from "../Components/StateProvider";
import "../App.css";
import { Layout } from "antd";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Path from "../Components/Path";
import ShowBankSummary from "../Components/ShowBankSummary";

const ShowBankPage = () => {
    const { bankName, nickName } = useParams();
    console.log(bankName, nickName);

    const [{ allAccounts }, dispatch] = useStateValue();
    const balance = allAccounts[allAccounts.findIndex((account) => account.bankName === bankName && account.nickName === nickName)].balance;

    return (
      <div>
        <Layout>
          <Navbar />
          <Layout>
            <Sidebar />
            <Layout style={{ padding: "0 24px 24px" }}>
              <Path bankName={bankName} nickName={nickName}/>
              <ShowBankSummary bankName={bankName} nickName={nickName} balance={balance}/>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
}

export default ShowBankPage;