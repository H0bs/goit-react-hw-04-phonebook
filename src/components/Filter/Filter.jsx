import PropTypes from 'prop-types';
import { FilterInput } from './Filter.styled'

export const Filter = ({filter, onChangeFilter}) => {
  return (
    <label>
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={onChangeFilter}
        placeholder="Find contact"
      />
    </label>
  )
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
}