import Inferno from 'inferno';
import Component from 'inferno-component';
import Disc from './DiscComponent';

class DiscPage extends Component {
	render() {
		return <div>
        Hello!!!
        <br />
        <Disc />
        </div>;
	}
}

export default DiscPage;