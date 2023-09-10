import heart from './icon/heart-line-icon.svg'

const Wish = () =>
{
    return (
    <div>
        <img
            style={{ width:'50px', height: '50px' }}
            alt="wishlist"
            src={heart}

        />
    </div>
    )
}

export default Wish;