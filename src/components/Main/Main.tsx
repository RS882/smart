import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import Container from './../Container';
import FirstScreen from './FirstScreen/FirstScreen';
import HeaderMenuContainer from './../Header/HeaderMenu/HeaderMenuContainer';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectLangStiringsHeaderMenuItem } from '../../redux/LanguageSlice';
import { getItem } from './../../redux/Thunk/thunkItem';
import store from '../../redux/store';
import ItemsContainer from './Items/ItemsContainer';

const StyledMain = styled.main`
	margin-top: 80px;
	
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		margin: 92px 20px 0 20px;
		
	};
	@media ${props => props.theme.media?.desktop || '(min-width: 991.98px)'} {
		margin: 80px 0px 0 0px;
	};
`;

const StyledWrapper = styled.div`
	display:flex;
	flex-direction:column;
`;
const Main: FC = (props) => {

	const menuItem = useAppSelector(selectLangStiringsHeaderMenuItem)
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(getItem(1));
	}, []);



	return (
		<StyledMain>
			<Container>
				<StyledWrapper>
					<HeaderMenuContainer strings={menuItem} />
					<FirstScreen />
					<ItemsContainer />
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus mollitia porro sint libero labore consequatur iure? Fugit aut nobis, quam iure reprehenderit consequuntur odit repellat, dolorum fugiat quas optio eos minus itaque? Quod facilis quibusdam commodi voluptate totam. Doloribus facilis blanditiis ad eveniet vero, enim libero a, dicta recusandae culpa sint magni at aliquid aliquam. Ad quas accusantium nostrum. Hic, dignissimos facere, veniam doloremque ad cupiditate necessitatibus accusamus, nam nostrum adipisci dolores voluptate iste nihil nesciunt praesentium. Amet repellat, modi est hic, vel nulla adipisci alias non incidunt numquam nostrum. Odio a quis nam excepturi error deleniti, fuga amet, explicabo minima hic ipsa! Dolorum consectetur dolores, voluptate quia voluptatum vel cupiditate quas omnis quos et impedit id, perspiciatis laboriosam, hic velit. Voluptatum cumque minima, deserunt eaque fugiat dicta in culpa velit quo. Mollitia, quia iusto aut officia perspiciatis delectus. Rem, quod? Autem provident, iste soluta, officiis tenetur, est error inventore nulla ab quibusdam architecto id in nihil commodi explicabo deserunt tempora cupiditate. Consequatur porro commodi animi natus quibusdam? Ex adipisci quae eum voluptatem dolore rerum, eligendi amet nemo maiores quam error velit modi libero odio? Numquam laudantium harum iste aperiam vitae molestiae cumque quibusdam cupiditate ducimus iure. Exercitationem provident id placeat, voluptas animi praesentium explicabo. Libero minima, molestiae maiores et aut dolores fugiat fugit harum quaerat. Id saepe hic fugiat alias assumenda voluptatibus harum veritatis neque corporis voluptatum iure autem perferendis eaque voluptatem eum dolore necessitatibus tempora aut, delectus quod porro animi nulla. Suscipit porro similique dolore, recusandae odio ex ducimus temporibus! Maiores laborum, consequuntur optio voluptatem rerum veritatis quis exercitationem odit consectetur perferendis vel quibusdam atque dicta facilis dolorum quo accusamus itaque quisquam tempora? Illum fugit magnam culpa reiciendis facere minus ducimus vero consequuntur, modi eum nostrum asperiores voluptatibus neque quam pariatur, eveniet debitis rem! Possimus dicta reiciendis magnam architecto aut eos maiores ullam eum doloremque nulla consequatur quibusdam error, natus nesciunt facilis tempore quia temporibus animi omnis nihil eius laboriosam repellat accusamus? Vero id numquam adipisci! Animi nostrum dolores quaerat nemo at, perferendis facere eveniet dolor recusandae id unde architecto quas ut fugiat iure vero voluptatibus quos aspernatur nesciunt eius! Aut obcaecati deleniti eos quibusdam tempore labore fuga cupiditate, ad ex inventore reprehenderit quidem praesentium nobis totam odio itaque pariatur aliquam dolorum voluptates nihil dicta quis. Voluptas, expedita commodi? Omnis consequuntur, ipsa maxime perferendis fugiat sed modi vitae molestias eius porro officiis atque nam quo accusamus, aliquid voluptas autem laudantium provident in ex quidem repudiandae nostrum. Ullam, eligendi ad fuga eaque quaerat ratione iure labore provident sit dolorum? Nihil omnis rem, iusto ea ducimus, dolor veritatis iste vitae dolorum consequatur modi sint aspernatur, facere atque ut. Error odio quisquam sunt sequi explicabo molestiae ipsam soluta in! Quia tempora quod vitae perspiciatis esse perferendis consectetur earum obcaecati beatae commodi minima blanditiis temporibus libero, aliquam ullam odit hic debitis dignissimos dolorem aperiam. Animi consequuntur at illum soluta! Consectetur tenetur rem modi dolorum, sint sed, explicabo aperiam animi recusandae, assumenda illo iste magni quibusdam deleniti ullam quae dolore quos dignissimos non. Odit natus, enim, aliquid perspiciatis laudantium sed temporibus dolorum labore impedit beatae, quia ipsam. Debitis illo tempora eaque omnis aliquam error ipsam dolor voluptatum optio harum quisquam a quod aliquid unde cumque delectus, odit voluptate atque ducimus natus minus illum similique architecto nesciunt? Perspiciatis facilis laborum, assumenda, officiis porro error harum deleniti enim aut expedita dolorem. Voluptatem perspiciatis enim placeat itaque ad debitis. Rerum sed fuga, fugiat labore cumque assumenda perferendis amet blanditiis totam molestiae quas maxime corrupti quia nostrum ad rem ducimus ab magnam commodi nisi illo aperiam! Sequi cum eaque aliquam obcaecati minus perferendis recusandae quam, nisi nemo nesciunt, voluptates explicabo! Atque eum saepe molestiae ut blanditiis voluptatem est cum aspernatur velit. Ratione sint ipsum reprehenderit harum temporibus, quae at debitis repellat impedit assumenda quasi quam omnis cum incidunt expedita labore ex. Sit animi excepturi ratione ab odit saepe aut quo consequatur perferendis! Quae tenetur odio omnis nemo non consectetur eligendi repellendus veniam commodi numquam vero facilis voluptatibus accusantium iure laudantium ratione laborum, magni nulla saepe laboriosam. Quas earum deserunt, nesciunt voluptas ea officia a sed repellat quasi reprehenderit sunt nobis, sit minima labore fugiat perferendis? Perspiciatis itaque quas, voluptates omnis officia commodi. Voluptates ad reprehenderit modi repudiandae voluptatem dolores eveniet praesentium explicabo veniam sint officiis cum illo sequi repellat nulla, distinctio soluta. Id maiores quod numquam quaerat! Vero iure sapiente, eum in blanditiis unde dolorum debitis mollitia quas provident repellendus earum quia maxime. Vel saepe laudantium est dolor officia ex repellat perferendis, quaerat ab dolorem in et quam harum rerum, ullam deleniti voluptatibus fugiat placeat. Veniam illo aut beatae vel? Amet corporis quae blanditiis atque placeat, deleniti quia nesciunt ducimus. Sed omnis tempora distinctio nesciunt? Distinctio, quibusdam totam eveniet asperiores, similique beatae a, voluptatem consequuntur eos eum sunt animi natus voluptatibus quasi. Quasi aut numquam provident dolore accusantium aliquam modi praesentium eum. Quibusdam aperiam, nostrum voluptatum maiores dignissimos quam id illum sed voluptatibus ipsam dolore repellat reprehenderit magni ducimus ea? Sit quibusdam distinctio alias quaerat voluptate accusamus temporibus voluptatem! Eaque perspiciatis perferendis necessitatibus nobis, laboriosam repudiandae ea vitae ipsa, facere impedit doloribus nam rerum doloremque quis repellendus dolor vero illo, ex consequatur harum ducimus consequuntur. Vitae fugiat libero similique blanditiis vero! Id totam debitis dicta in obcaecati eaque nemo tempora aliquid ipsa fugit cum quam minus incidunt blanditiis, ab reiciendis. Optio, unde ad. Aperiam assumenda optio ex velit illum sunt architecto corporis, placeat eligendi. Voluptates repudiandae earum id quibusdam officiis molestiae corporis est, provident itaque incidunt quidem aut veritatis fuga officia temporibus dicta mollitia nulla doloremque tenetur natus rerum necessitatibus error! Ex cum quae praesentium eligendi? Ipsum similique eveniet, iusto ducimus dignissimos incidunt vel dolore, repudiandae esse ea nulla sed unde odit at autem. Id odio harum sequi incidunt ratione soluta tempora nihil, nostrum eaque magni nisi voluptates aliquid rem sunt suscipit recusandae? Eligendi quaerat officia deleniti dolor sit quam quibusdam quidem magnam autem laboriosam corrupti reprehenderit consequatur quas, fugit recusandae numquam omnis. Enim voluptas deserunt repellat provident laboriosam maxime libero soluta recusandae, voluptates magni minus eligendi.
				</StyledWrapper>
			</Container>
		</StyledMain>
	);
};

export default Main;
