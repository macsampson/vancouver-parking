import React from 'react'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'

import { FormControl } from '@mui/material'

function MeterTypeSelect(props) {
  return (
    <FormControl style={{ marginTop: '16px' }}>
      <InputLabel id="demo-simple-select-label">Meter Type</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={props.meterType}
        label="Meter Type"
        onChange={props.onMeterChange}
      >
        <MenuItem value="Any">
          <em>Any</em>
        </MenuItem>
        <MenuItem value={'Single'}>Single</MenuItem>
        <MenuItem value={'Twin'}>Twin</MenuItem>
        <MenuItem value={'Motorbike'}>Motorbike</MenuItem>
        <MenuItem value={'Disability'}>Disability</MenuItem>
        <MenuItem value={'Pay Station'}>Pay Station</MenuItem>
        <MenuItem value={'Bay'}>Bay</MenuItem>
      </Select>
    </FormControl>
  )
}

export default MeterTypeSelect