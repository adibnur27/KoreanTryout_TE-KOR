import React from 'react'
import { ChangeFullName } from './ChangeFullName'
import { ChangePassword } from './ChangePassword'
import ProfilePhotoUploader from './ProfilePhotoUploader/ProfilePhotoUploader'

const EditProfile = () => {
  return (
    <div className='px-10 py-10'>
        <div className='text-2xl font-montserrat font-bold text-center mb-10'>Edit Profile</div>
        <div>
            <ProfilePhotoUploader />
            <ChangeFullName />
            <ChangePassword />
        </div>
    </div>
  )
}

export default EditProfile