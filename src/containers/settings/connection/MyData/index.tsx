import { Box, Button, Stack } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/redux/hooks";
import {
  changeHeaderTitle,
  selectGuestMode,
  setBottomBarOpenFalse,
  setBottomBarOpenTrue,
} from "../../../../app/redux/slices/commonSlice";
import {
  fetchCreateAccount,
  fetchGetAccountList,
  fetchGetCardList,
} from "../../../../app/api/API";
import OrganizationSelect from "./OrganizationSelect";
import AccountInput from "./AccountInput";
import RoundedPaper from "@components/common/RoundedPaper";
import AssetSelect from "./AssetSelect";
import AssetFilter from "./AssetFilter";
import { useNavigate } from "react-router-dom";
import useModal from "@hooks/useModal";
import AlertModal from "@components/common/AlertModal";
import { OrganizationInterface } from "@type/common";

function MyData() {
  const navigate = useNavigate();
  const businessType = ["BK", "CD", "ST", "IS"];
  const dispatch = useAppDispatch();
  const guestMode = useAppSelector(selectGuestMode);
  const backButton = document.querySelector("#back_button");

  const {
    modalOpen: alertModalOpen,
    openModal: openAlertModal,
    closeModal: closeAlertModal,
  } = useModal();

  const [step, setStep] = useState(0);
  const [value, setValue] = useState(0);
  const [selected, setSelected] = useState<OrganizationInterface>({
    name: "",
    value: "",
    icon: "",
    limit: 0,
  });
  const [form, setForm] = useState({ id: "", password: "" });
  const [selectedAccount, setSelectedAccount] = useState({
    name: "",
    account: "",
  });
  const [content, setContent] = useState("");
  const [pwdCount, setPwdCount] = useState(1);

  useEffect(() => {
    backButton?.addEventListener("click", handleClickBack);

    if (step === 0) {
      dispatch(changeHeaderTitle("마이데이터"));
      setSelected({ name: "", value: "", icon: "", limit: 0 });
    } 

    switch (step) {
      case 1:
        dispatch(changeHeaderTitle("자산연결"));
        setContent("거래내역을 조회하시겠습니까?");
        setForm({ id: "", password: "" });
        break;
      case 3:
        changeHeaderTitle("자산조회");
        setContent(
          "모든 계좌 연결을 해제하시겠습니까?\n조회된 거래내역은 삭제되지 않습니다."
        );
        setSelectedAccount({ name: "", account: "" });
        break;
      case 4:
        setContent("조회에 성공했습니다.\n홈 화면에 내역을 추가하시겠습니까?");
        break;
    }

    return () => {
      backButton?.removeEventListener("click", handleClickBack);
    }
  }, [step]);

  useEffect(() => {
    dispatch(setBottomBarOpenFalse());

    return () => {
      dispatch(setBottomBarOpenTrue()) as unknown as void;
    }
  }, []);

  const handleClickBack = () => {
    if (step === 0) {
      navigate(-1);
    } else {
      setStep(step - 1);
    }
  };

  const handleChangeType = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    setSelected({ name: "", value: "", icon: "", limit: 0 });
  };

  const handleSelectOrganization = (org: OrganizationInterface) => {
    setSelected(org);
    setPwdCount(1);
  };

  const changeDetailInfo = (state: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [state.target.id]: state.target.value });
  };

  const handleSelectAccount = (name: string, account: string) => {
    setSelectedAccount({ name: name, account: account });
    changeStep();
  };

  const changeStep = () => setStep(step + 1);
  const goFirstStep = () => setStep(0);

  const handleClickSerch = async (value: {
    startDate: string;
    endDate: string;
    orderBy: string;
  }) => {
    // const result = await fetchGetTransavrionList(selectedAccount);
    console.log({ ...value, ...selectedAccount });
    openAlertModal();
  };

  const handleClickYes = () => {
    switch (step) {
      case 1:
        changeStep();
        break;
      case 2:
        if (content === "자산 연결에 성공했습니다.") {
          changeStep();
        }
        break;
      case 3:
        goFirstStep();
        break;
      case 4:
        goFirstStep();
        break;
    }
    closeAlertModal();
  };

  const handleClickOk = async () => {
    // if (guestMode) {
    //     alert('게스트 모드입니다.')
    // } else {
    //     const result = await fetchCreateAccount([{
    //         businessType: businessType[value],
    //         organization: selected.value,
    //         // loginType: 1,
    //         ...form,
    //     }]);
    //     if (result.data) {
    //         const list = await getList();
    //         console.log(list);
    //     }
    // }
    const result = await fetchCreateAccount([
      {
        businessType: businessType[value],
        organization: selected.value,
        // loginType: 1,
        ...form,
      },
    ]);

    if (result) {
      setContent("자산 연결에 성공했습니다.");
      const list = await getList();
      console.log(list);
    } else if (selected.limit === "-") {
      setContent(`로그인 정보가 일치하지 않습니다.`);
    } else {
      setContent(
        `로그인 정보가 일치하지 않습니다.\n(${pwdCount}/${selected.limit})`
      );
      setPwdCount(pwdCount + 1);
    }

    openAlertModal();
  };

  const getList = async () => {
    let result = [];
    switch (businessType[value]) {
      case "BK":
        result = await fetchGetAccountList(selected.value);
        return result.data;
      case "CD":
        result = await fetchGetCardList(selected.value);
        return result.data;
      case "ST":
        break;
      case "IS":
        break;
    }
  };

  const steps = [
    <RoundedPaper my={0}>
      <Stack
        sx={{ height: "320px" }}
        alignItems="center"
        justifyContent="center"
        spacing={1}
      >
        <Box>연결된 자산이 없어요.</Box>
        <Button
          sx={{ borderRadius: "50px" }}
          size="large"
          variant="contained"
          endIcon={<AddRoundedIcon />}
          onClick={changeStep}
        >
          MY 자산 연결하기
        </Button>
      </Stack>
    </RoundedPaper>,
    <OrganizationSelect
      value={value}
      selected={selected}
      handleChangeType={handleChangeType}
      handleSelectOrganization={handleSelectOrganization}
      openAlertModal={openAlertModal}
    />,
    <AccountInput
      selected={selected}
      form={form}
      changeDetailInfo={changeDetailInfo}
      handleClickOk={handleClickOk}
    />,
    <AssetSelect
      selected={selected}
      handleSelectAccount={handleSelectAccount}
      openAlertModal={openAlertModal}
    />,
    <AssetFilter
      selected={selected}
      selectedAccount={selectedAccount}
      handleClickSerch={handleClickSerch}
    />,
  ];

  return (
    <Box m={2}>
      {steps[step]}

      <AlertModal
        open={alertModalOpen}
        handleClose={step !== 2 ? closeAlertModal : undefined}
        handleClickYes={() => handleClickYes()}
        mode={"setting"}
        content={content}
      />
    </Box>
  );
}

export default MyData;
