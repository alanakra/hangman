import Switch from '@mui/material/Switch'
import PropTypes from 'prop-types'

export default function SwitchLang({langChecked, handleChangeLang}) {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div>English</div>
            <Switch
                checked={langChecked}
                onChange={handleChangeLang}
                inputProps={{ 'aria-label': 'controlled' }}
                />
            <div>Francais</div>
        </div>
    )
}

SwitchLang.propTypes = {
    langChecked: PropTypes.bool,
    handleChangeLang: PropTypes.func
}
