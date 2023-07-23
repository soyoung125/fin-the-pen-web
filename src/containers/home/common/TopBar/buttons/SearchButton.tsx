import RoundedButton from "../../../../../components/common/RoundedButton";
import SearchIcon from '@mui/icons-material/Search';

function SearchButton() {
    return (
        <>
        <RoundedButton value="user" onClick={() => alert('준비 중인 메뉴')}>
          <SearchIcon />
        </RoundedButton>
        </>
    );
}

export default SearchButton;
