'use client'
import { createClient } from '@/utils/supabase/client'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import { useEffect, useState } from 'react'
import { Badge, Menu, MenuItem, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'

const NotificationButton = () => {
  const supabase = createClient()
  const router = useRouter()
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const [notifications, setNotifications] = useState([])

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  useEffect(() => {
    const getNotifications = async () => {
      try {
        const { data, error } = await supabase.from('notifications').select(`
            id, 
            created_at,
            is_read,
            owner_id,
            planned_maintenances (
              planned_maintenance_mileage,
              work_types(
                name
              ),
              description,
              cars(
                    id,
                    make,
                    model
                )
            )`)

        if (error) throw error

        setNotifications(data)
        console.log('Уведомления успешно прочитаны:', data)
      } catch (error) {
        console.error('Ошибка при получении списка уведомлений:', error)
      }
    }

    getNotifications()
  }, [])

  const renderNotification = (notification) => {
    const { id, created_at, is_read, owner_id, planned_maintenances } =
      notification

    return (
      <MenuItem
        key={id}
        onClick={() =>
          router.push('/protected/car-info?cid=' + planned_maintenances.cars.id)
        }
      >
        <Typography>
          <Typography variant='body2'>
            {planned_maintenances.description + ' '}
          </Typography>
          <Typography variant='caption'>
            Пробег: {planned_maintenances.planned_maintenance_mileage} км{' '}
          </Typography>
          <br />
          <Typography variant='caption'>
            Вид работ: {planned_maintenances?.work_types.name + ' '}
          </Typography>
          <br />
          <Typography variant='caption'>
            Автомобиль:{' '}
            {`${planned_maintenances.cars.make}, ${planned_maintenances.cars.model}`}
          </Typography>
          <br />
        </Typography>
      </MenuItem>
    )
  }

  return (
    <>
      <Badge
        badgeContent={notifications.filter((n) => !n.is_read).length}
        color='primary'
        aria-controls={open ? 'simple-menu' : undefined}
        aria-haspopup={open}
        onClick={handleClick}
      >
        <NotificationsNoneIcon className='dark:text-white text-gray-500' />
      </Badge>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'notification-button'
        }}
      >
        {notifications.map((notification) => (
          <MenuItem key={notification.id} disabled={notification.is_read}>
            {renderNotification(notification)}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default NotificationButton
