import BannerDish from '../../components/BannerDish'
import DishCardList from '../../components/DishCardList'
import ProfileHeader from '../../components/ProfileHeader'

const Profile = () => (
  <>
    <ProfileHeader />
    <BannerDish />
    <div className="container">
      <DishCardList />
    </div>
  </>
)

export default Profile
