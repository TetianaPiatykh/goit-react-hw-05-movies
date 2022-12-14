import { Wrapper, Input, Icon, Button } from "./SearchBox.styled";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchBox = () => {
 const [searchParams, setSearchParams] = useSearchParams('');
  const [searchQuery, setSearchQuery] = useState('');

  const onChange = event => {
    setSearchQuery(event.target.value);
    // console.log(searchParams);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: searchQuery });
    console.log(searchParams);
    // setSearchQuery('');
  };


  return (
    <Wrapper onSubmit={onFormSubmit}>
      
      <Input
        type="text"
        value={searchQuery}
        name="query"
        onChange={onChange}
      />
      
          <Button type="submit"><Icon /> Search</Button>
    </Wrapper>
  );
};
export default SearchBox;
