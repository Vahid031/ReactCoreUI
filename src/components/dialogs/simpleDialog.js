import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import PersonIcon from '@material-ui/icons/Person'
import { blue } from '@material-ui/core/colors'

const useStyles = makeStyles({
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
})

function SimpleDialog(props) {
    const classes = useStyles()
    const { onClose, selectedValue, items, title, ...other } = props

    function handleClose() {
        onClose(selectedValue)
    }

    function handleListItemClick(value) {
        onClose(value)
    }

    return (
        <Dialog
            onClose={handleClose}
            aria-labelledby="simple-dialog-title"
            {...other}
        >
            <DialogTitle id="simple-dialog-title">
               {title}
            </DialogTitle>
            <List>
                {Object.keys(items)?.map((item) => (
                    <ListItem
                        button
                        onClick={() => handleListItemClick(item)}
                        key={item}
                    >
                        <ListItemAvatar>
                            <Avatar className={classes.avatar}>
                                <PersonIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={items[item]} />
                    </ListItem>
                ))}

                {/* <ListItem
                    button
                    onClick={() => handleListItemClick('addAccount')}
                >
                    <ListItemAvatar>
                        <Avatar>
                            <AddIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="add account" />
                </ListItem> */}
            </List>
        </Dialog>
    )
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func,
    open: PropTypes.bool,
    selectedValue: PropTypes.string,
    items : PropTypes.object,
    title : PropTypes.string
}

export default SimpleDialog

// export default function SimpleDialogDemo() {
//     const [open, setOpen] = React.useState(false)
//     const [selectedValue, setSelectedValue] = React.useState(emails[1])

//     function handleClickOpen() {
//         setOpen(true)
//     }

//     const handleClose = (value) => {
//         setOpen(false)
//         setSelectedValue(value)
//     }

//     const {t} = useTranslation();

//     return (
//         <div>
//             <Button
//                 variant="outlined"
//                 color="primary"
//                 onClick={handleClickOpen}
//             >
//                 {t("language")}
//             </Button>
//             <SimpleDialog
//                 selectedValue={selectedValue}
//                 open={open}
//                 onClose={handleClose}
//             />
//         </div>
//     )
// }
