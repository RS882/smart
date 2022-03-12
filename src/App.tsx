import React, { FC, useEffect } from 'react';
import styled from 'styled-components'
import Flex from './components/Flex';

import { closeMenuLng, selectIsChangeLng, selectIsLangMenu, setLanguages } from './components/redux/LanguageSlice';
import { useAppDispatch, useAppSelector } from './components/redux/hooks';
import { strings } from './localization/localization';
import { ArrowFn } from './components/types';
import HeaderContainer from './components/Header/HeaderContainer';

interface IAppWrapper {
  // onClick: ArrowFn;
  onClickApp?: ArrowFn;
}

const AppWrapper = styled(Flex)`

  min-height: 100%;
	overflow: hidden;
	position: relative;
  color:${props => props.theme.color.text.main || `#070C11`};
  line-height: 130%;
  background-color: ${props => props.theme.color.bg.main || `#fff`};
  > main {
		flex: 1 1 auto;
	}
`


const App: FC<IAppWrapper> = (props) => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLanguages({
      languages: strings.getAvailableLanguages(),
      activeLanguage: strings.getLanguage(),
    }))
  });

  const isChangeLng = useAppSelector(selectIsChangeLng);
  useEffect(() => {
  }, [isChangeLng]);

  const isMenu = useAppSelector(selectIsLangMenu);
  const onClickApp = () => {
    isMenu && dispatch(closeMenuLng());
  }


  return (
    <AppWrapper onClick={onClickApp} direction={'column'}>
      <HeaderContainer />
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor accusamus deleniti nisi necessitatibus, sint consequuntur. Alias illum illo reiciendis sit eveniet consequuntur tempore perspiciatis vero velit, omnis, voluptatibus repellat iusto?
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis id omnis consectetur est autem veritatis! Repellat asperiores dolor inventore beatae, unde eligendi? Illo earum ab distinctio sunt sed! Nisi rerum incidunt excepturi. Nulla molestias ipsum veritatis, dolores fugiat libero officia officiis veniam harum nobis ratione ea mollitia nam, nemo beatae eligendi! Facere doloribus ipsum voluptas temporibus nemo rerum magnam impedit consequatur modi deserunt necessitatibus earum obcaecati id sed distinctio atque, pariatur, quo numquam reprehenderit, qui unde repudiandae. A, ratione natus. Ex harum, minima iste veniam perspiciatis beatae cumque rem neque sed voluptatem nisi maiores veritatis aut dolore distinctio deserunt. Dolor, nam! Distinctio asperiores doloribus impedit est aliquid rerum quod repudiandae tenetur! Aspernatur hic minus explicabo quibusdam, repellat tenetur odio suscipit dolore incidunt mollitia a ipsum sunt dolores iste asperiores dicta provident molestias sequi quo harum laboriosam, nihil, nulla quos. Quis quidem, eaque asperiores soluta rem repudiandae quasi quod nostrum omnis perferendis? Consequuntur itaque tempore, sed assumenda ut omnis repudiandae ad dolorum quos blanditiis eum error officiis natus cum labore quae dicta beatae. Sed, deserunt minima. At quaerat, iusto est hic sapiente quod reiciendis expedita deleniti porro tempore? Obcaecati maxime quis modi corporis est amet mollitia? Distinctio quae soluta minima a voluptate molestias, nisi incidunt perspiciatis, maxime dolor est accusamus id blanditiis? Aspernatur ea reiciendis temporibus repellendus excepturi cumque a, ipsa perferendis! Aperiam quia atque culpa rem alias! Dolorum itaque quidem magni debitis, repellat veritatis, consequatur sint ipsum perferendis laboriosam officia libero labore delectus est necessitatibus eius doloribus fuga praesentium, soluta dicta excepturi dolor voluptatibus? Modi, eveniet voluptatibus? Earum distinctio libero voluptatibus dolorem dolor voluptatum delectus aliquid voluptas voluptatem rerum neque iure sit optio nisi, fuga qui aspernatur! Voluptatum laborum quod recusandae error at esse id reiciendis optio? Accusamus nulla non dolorem commodi sunt nemo ex quibusdam quae, quidem blanditiis suscipit laboriosam impedit porro molestias sed? Rerum tempore placeat, repellendus quasi nostrum perferendis quod iure laboriosam natus quibusdam facere itaque, unde dolore obcaecati facilis explicabo odit ut cupiditate. Consequatur molestias commodi et corporis voluptatum exercitationem consectetur itaque quam enim, necessitatibus ad quis quia quisquam dignissimos, odit corrupti facilis ea ratione voluptatem temporibus perferendis cum iusto possimus dolorem! Blanditiis natus unde nostrum, iure corporis delectus quisquam sit non repellat adipisci! Ipsum beatae nobis atque similique dolorem molestiae eum pariatur quam ex, nisi architecto blanditiis odit natus, vero nulla placeat eaque! Veritatis porro expedita ratione perspiciatis laudantium unde id quibusdam sint libero earum, rerum cupiditate, omnis accusamus quaerat, doloribus sapiente minus vel alias sit accusantium? Debitis omnis distinctio placeat explicabo, inventore assumenda ipsa molestiae quisquam deleniti? Amet ab doloribus, eos consequatur soluta obcaecati maiores neque, porro eum, nihil laudantium facilis maxime veritatis sit atque in voluptates. At officiis labore cupiditate nesciunt earum perferendis a dignissimos vitae sint pariatur dolorum eveniet debitis iste eos quidem, accusamus id natus ipsum asperiores placeat. Reiciendis nihil blanditiis ad molestias est quo debitis totam cum cupiditate fugit laborum, ratione earum saepe error non sapiente maxime beatae architecto rem repellendus velit dolor. Porro ab repellat sed id corporis incidunt, omnis quod blanditiis minima iusto dolores sequi dicta voluptate vel veritatis laborum temporibus. Voluptates aliquam odio nam repudiandae. Doloribus suscipit possimus provident corporis optio quibusdam amet aliquid deserunt tempora cumque eligendi accusantium, non voluptatum in ipsa consectetur! Iusto ipsa consequuntur explicabo commodi architecto modi quasi ducimus, magni nam ullam. Quod accusantium nesciunt omnis similique necessitatibus magni, aspernatur dicta blanditiis reprehenderit quia quos quo dolor, dignissimos provident, quidem maiores earum labore facilis eveniet. Quia explicabo eius aliquid, tempora quo repellendus. Est porro earum optio, saepe enim quisquam fugiat distinctio ducimus in modi quod! Rem quidem harum libero temporibus quis! Sit ab tenetur, vel reiciendis ut, sequi delectus amet rerum molestiae nostrum, reprehenderit fuga sunt nulla illum qui itaque alias! Commodi magni nulla accusantium amet pariatur fugit. Assumenda dolor temporibus officiis, quisquam quidem vitae numquam animi dolores laborum! Eveniet veritatis, voluptatem saepe sequi vitae ducimus minus eaque dolores nihil minima quod odio aut magnam quisquam necessitatibus est totam illum obcaecati, corporis esse quidem ex? Eveniet debitis perspiciatis quia eum reiciendis suscipit natus, atque rem, error odit est. Sit eum numquam dolor suscipit quod consequatur odio unde excepturi fugiat architecto necessitatibus, voluptatum cumque obcaecati nisi dolores adipisci expedita ut? Nobis, quo error temporibus nulla aliquam, iste minus vero pariatur voluptas dolore qui voluptatem cumque! Eveniet harum sed, consectetur doloribus, accusantium neque nisi aliquid nemo sunt excepturi nulla adipisci minima blanditiis repudiandae alias officiis? Nesciunt ex laborum, et laboriosam ad error soluta in temporibus accusantium accusamus! Odit eos aut nulla eaque placeat, rerum itaque earum ad officiis laudantium omnis alias blanditiis sint distinctio ullam autem? Aspernatur laboriosam doloremque sapiente officia animi corrupti, beatae dicta impedit deserunt cum assumenda nostrum reiciendis minima numquam quia? Delectus rerum voluptate sit quo, laudantium reiciendis aliquid. Magnam consectetur fugit labore, deserunt beatae possimus excepturi corporis! Est consequatur modi cum harum iste dolorum quaerat aut dignissimos maxime voluptates sequi laborum explicabo enim repellat sapiente corporis doloremque natus deserunt, facilis sed a reiciendis? Commodi consectetur natus eaque voluptatum repudiandae corporis explicabo molestiae quidem optio accusantium vel, sint perferendis alias quo veniam quas minus assumenda? Id inventore, vero, officiis totam deleniti facere ipsum minus veniam voluptatem provident ducimus aliquid repudiandae voluptatum voluptate tempora, ad minima aspernatur. Totam, voluptas aspernatur quisquam laboriosam quasi sapiente laborum temporibus maiores quos a possimus! Dolore, laborum. Magni debitis ducimus eos, eaque nam sint expedita distinctio mollitia voluptatibus odit facere sunt totam necessitatibus, a, omnis beatae optio non asperiores hic impedit nobis. Saepe ex, impedit illum quisquam incidunt a nostrum recusandae aliquam ipsa facilis asperiores iure adipisci at minus debitis nam et? Mollitia aliquid cumque, aut tempore, cum quas expedita saepe officiis enim obcaecati eos fugit laborum quasi laboriosam quidem non commodi dolor labore in quo nesciunt reprehenderit dignissimos temporibus ratione. Culpa voluptatem, accusantium quibusdam unde fuga explicabo voluptatum? Ad est atque amet architecto aliquid expedita provident facilis minima dolorem nemo rerum aliquam cum, nesciunt aspernatur voluptatem nobis commodi voluptatibus perspiciatis, illum impedit. Saepe, repudiandae inventore totam neque iusto placeat sequi similique vitae perferendis quos cumque voluptatibus labore ex eveniet deleniti culpa sint impedit explicabo aperiam recusandae quaerat, atque, qui exercitationem. Numquam obcaecati molestias eligendi accusamus dolorem esse. Aliquid, ducimus aperiam rerum nihil, soluta inventore praesentium dolores eum veritatis tempore, quibusdam deserunt ipsam vel tenetur. Libero eum consequatur dolores esse, adipisci veniam temporibus voluptate quasi. Maxime cum repellat exercitationem expedita mollitia, ab corrupti. Dicta nobis eaque tempora nemo laudantium rerum at fugit officiis. Adipisci, quia! Tempore sint voluptates sequi, suscipit nihil officia. Delectus mollitia quis commodi similique neque esse quos laborum optio eius distinctio. Commodi libero illo quia porro ad et optio exercitationem, aliquid magnam soluta, voluptatem hic totam harum incidunt sit qui a! Pariatur totam dolore velit, iusto magnam voluptas animi numquam! Accusamus facere voluptatum, eos inventore perferendis commodi! Similique aspernatur maiores officia repellendus incidunt sunt! Dolorem est modi dolore fuga, at eveniet reiciendis ad perspiciatis debitis accusantium inventore nobis aspernatur alias iusto voluptatem quas nemo quam amet deleniti sunt praesentium recusandae officiis. Dolore enim quia doloremque, esse, ut eos ad veniam cumque, voluptatem hic perferendis recusandae pariatur quisquam repellat odit. Officia fuga totam optio libero quos harum, voluptatum molestiae eaque blanditiis mollitia quibusdam aut suscipit possimus quis. Itaque corrupti suscipit eius cupiditate voluptatem maxime quidem, ipsam beatae incidunt voluptatibus repudiandae. Minima quaerat voluptas pariatur fugiat provident cum dolor, suscipit sed vitae voluptatum esse magni molestias culpa qui vel architecto delectus accusamus, alias sapiente ea quia, voluptate corporis? Voluptas nostrum quibusdam, ullam eaque reiciendis cupiditate incidunt inventore cum eum adipisci esse maxime in consequatur praesentium accusamus! Quisquam officia, corporis labore totam reprehenderit mollitia libero error molestiae fugit consequatur adipisci dolor voluptates dolores quibusdam itaque. Omnis blanditiis alias sint temporibus? Numquam a reprehenderit corporis ipsam adipisci vitae mollitia quaerat enim ad, nobis perferendis maxime esse, ullam magni? Placeat amet molestias dolor a consectetur quos, reprehenderit debitis saepe voluptatum soluta accusantium suscipit nostrum eligendi, temporibus iste ipsa deleniti itaque officiis repudiandae rem harum. Sequi dolorem tempore dicta odio animi rem, quam minus repudiandae sapiente vero alias necessitatibus debitis sunt nam, illum aliquid numquam tenetur neque facere laudantium quis! Neque non repudiandae quasi laboriosam rerum! Vitae ut debitis animi distinctio expedita libero aspernatur velit quas, quos odit minus? Itaque, aspernatur sit. Rerum consequuntur, laboriosam tempora, voluptates placeat porro tempore dignissimos fuga quo obcaecati laudantium nisi possimus exercitationem ratione a magnam itaque deleniti nulla veniam, quidem modi aliquam ipsam! Minima molestias exercitationem qui praesentium, animi quod quasi voluptatum, laudantium cumque ullam excepturi quia sapiente enim quaerat pariatur nostrum recusandae assumenda a dolor voluptatem? Quia maxime qui voluptatem culpa in corrupti distinctio. Quibusdam tempore non, necessitatibus a sint esse quod sed perferendis optio porro ullam nesciunt temporibus vero molestias ipsum quidem fugiat quasi impedit nemo. Facilis, enim obcaecati? Deserunt enim eos assumenda dolore numquam eaque eveniet in, amet, itaque molestiae rem dicta optio atque quia est obcaecati illo modi, excepturi ipsa asperiores repellat voluptatibus nobis nesciunt magni! Rerum voluptates non, fuga inventore, tenetur odit laboriosam minus ipsa hic reiciendis corporis, eaque repellendus! Magnam voluptates eius consequuntur, optio dolorem in ea explicabo similique, accusamus iste, officia deserunt eveniet sed quia doloremque ut ratione eum quidem repellat ipsum nemo suscipit veritatis temporibus! Alias eveniet et explicabo amet quod iste aliquam dolorem molestias obcaecati unde sapiente magnam corporis perspiciatis quis ipsum exercitationem similique quos, officia facilis quisquam, natus minus dignissimos voluptates. Accusantium quisquam repudiandae incidunt fuga tenetur fugiat veritatis maxime rerum quos, est omnis! Voluptatem tempora laborum nihil dicta illum minima praesentium harum maxime ducimus. Fugiat labore tempora dolor sit expedita vel, ipsum modi deleniti eaque porro amet earum accusantium eius! Eligendi alias aliquid illum enim iusto recusandae, sint deleniti similique reiciendis laudantium sit aperiam vel dolores vero possimus facilis amet iure dolorum id corporis error ex sequi consequuntur et! Excepturi voluptas alias iusto? Cumque, maiores dolorum. Animi ab minima eius provident explicabo consectetur, eligendi velit aliquam reiciendis deserunt distinctio assumenda numquam repellendus optio soluta iste? Quod labore, rem iusto necessitatibus eius ullam facilis repudiandae possimus. Tenetur, esse? Illo, repellendus. Autem, perspiciatis fuga eveniet minus tenetur placeat voluptates nisi laudantium provident cupiditate delectus repudiandae exercitationem assumenda sunt error quia perferendis reiciendis voluptatibus architecto facere similique labore dolores minima consectetur! Ducimus cupiditate explicabo, recusandae cum fuga quae, earum expedita reprehenderit, quam ipsam sit unde! Totam eaque omnis quam, voluptatem quisquam numquam eius, quasi tempora deserunt aperiam esse impedit, rem odio repudiandae voluptatibus. Porro quam officiis, ipsa enim quasi commodi dolores eum neque illo provident, atque quos ex, at labore minus quisquam voluptatibus nesciunt excepturi voluptas optio fugit pariatur. Amet iste quis nam velit sequi quod ipsa vitae voluptatum voluptas nulla? Corrupti velit magnam ratione obcaecati consequatur eius libero, quos at praesentium tenetur. Ad eius velit repudiandae dicta impedit consectetur laborum odio nam. Iure sed perspiciatis nemo laborum amet rem magnam labore eius animi non cupiditate architecto, eveniet dolor quo, deleniti a hic saepe aliquam alias assumenda dolorem est blanditiis. Ratione ex numquam quas dolore ipsum neque quod atque vero, a corrupti rerum sunt similique ut adipisci consectetur quis voluptate perferendis esse nesciunt consequatur velit laboriosam suscipit officia sed. Labore sit, ullam dignissimos deleniti vitae qui dolore. Est fuga numquam deserunt totam esse vel sapiente modi, aut sed veritatis. Voluptatum tempora velit unde incidunt quaerat, quae impedit ex numquam sunt sit veniam minima at. Sunt quas neque voluptatum rem, totam, numquam tenetur quae modi exercitationem quia eveniet necessitatibus quos illo ad repellendus voluptatibus. Rerum delectus excepturi officiis perferendis illo alias expedita. Quaerat repellendus dignissimos excepturi recusandae, iste voluptatem officia quibusdam esse necessitatibus fugiat eum reiciendis aspernatur. Doloribus recusandae sapiente nobis vero rerum ullam sequi fugit nam. Atque, provident iste maxime eos excepturi porro quia rem. Quibusdam voluptatibus soluta quasi magni accusantium odit architecto. Quo architecto, labore maiores, ea reprehenderit quisquam quae quas dolorum voluptates illum odit porro explicabo. Corporis, sint blanditiis voluptate vitae temporibus iusto distinctio dicta aut, at dolorum nihil eaque? Nostrum dicta reiciendis numquam quasi repudiandae, eaque assumenda rerum omnis voluptatem commodi tenetur. Ab aliquam autem quas doloribus rerum deleniti iure, repellat, at nisi non optio tempore perferendis fuga alias aspernatur. Aspernatur temporibus accusantium consectetur delectus molestias nesciunt expedita deleniti consequatur impedit explicabo doloremque dolor magni dolore nobis omnis nulla, veritatis, iusto quod culpa tenetur totam enim ad odio! Laudantium eveniet ipsum quidem nobis consequuntur maxime at, aliquam ea odio ipsa voluptas accusantium, facilis, natus pariatur impedit quisquam numquam. Quae officiis obcaecati perspiciatis aliquid rerum, sequi repellendus magnam cum, quasi nobis excepturi sit veniam. Id minus excepturi ratione hic, illum nihil doloribus itaque quia temporibus aut! Quas quia molestias nesciunt rem. Libero saepe animi quasi aut quos similique fugit incidunt nihil eos ipsa delectus ipsum veritatis aliquid adipisci quis numquam quas culpa eveniet quam, minus expedita laudantium nemo! Vero excepturi voluptatum fugit perferendis corrupti explicabo laudantium quae, impedit, aliquid repellat temporibus voluptates obcaecati sapiente non! Reprehenderit ratione officia molestias facilis molestiae dolores aliquid consectetur dolorem nobis quia natus, necessitatibus tempora. Accusantium, tempore architecto, eveniet voluptatum nesciunt expedita minima laboriosam facere voluptates harum quae itaque a. Ut sit voluptates laborum totam in reprehenderit inventore fuga labore repudiandae non quibusdam id quaerat impedit magni, deserunt sed eveniet possimus odio animi culpa magnam odit assumenda? Reprehenderit sunt autem tempore laudantium repellendus a quae modi blanditiis perspiciatis alias exercitationem, necessitatibus sint veniam quas ratione, error quidem unde eaque vero ea! At saepe vero, voluptate dignissimos placeat neque qui nam! Aperiam commodi adipisci alias. Dolore maxime assumenda, delectus adipisci nesciunt perferendis facilis, officiis iusto fuga cum commodi quo provident. Tenetur similique minus ratione nam corporis fugit illo magnam, aspernatur cupiditate temporibus, vero quasi suscipit quo voluptate adipisci autem voluptatem explicabo, assumenda quos nostrum impedit nisi debitis recusandae. Culpa ducimus, laudantium modi quis vero possimus tempore maiores. Totam numquam amet sint officiis enim ab repellendus, exercitationem laudantium eveniet eius voluptatum obcaecati earum optio consectetur, commodi quaerat quibusdam. Consequuntur velit, iure officia nemo cupiditate excepturi. In, sint. Inventore aut fuga sunt eaque eligendi saepe accusantium assumenda suscipit natus totam atque nostrum laboriosam, ut illum porro nesciunt. Praesentium ab soluta, fuga reiciendis sed obcaecati, quos minima qui maiores, autem illum totam dignissimos? Facilis, quasi! Architecto quia ipsa suscipit illo placeat repellendus? Quis nihil totam quae enim veniam? Quisquam facere maiores esse expedita quod sequi ipsum consectetur neque recusandae temporibus eaque accusamus vero est ratione maxime laboriosam, totam animi! Possimus fuga provident magnam voluptate, aliquam sint dolores similique error quaerat quia asperiores minima amet ducimus quo harum. Incidunt earum placeat odio totam iure deserunt, nisi magni ea architecto sequi aspernatur hic ut voluptatum fuga? Ratione numquam alias, veniam nam, sint sunt pariatur iusto delectus minima et beatae dolorum qui sapiente at consequuntur libero magni expedita quod amet rerum voluptates! Possimus reiciendis suscipit ea obcaecati ab autem ipsum excepturi ratione maxime vitae voluptatem consequatur at est, eius minima perferendis assumenda soluta! Accusamus, est quae dignissimos, iste quo consequuntur mollitia explicabo nisi doloremque esse, cumque quibusdam. Dolorem vel ipsa officia dolorum consectetur dolore sapiente nam praesentium in, nulla minima quaerat aliquid cum, dolor iure veniam sed accusantium adipisci! Incidunt, tenetur! Cum, dolore? Voluptatem voluptas veritatis, omnis ab dolore optio a, sed reiciendis facere ratione quas. Cum nihil incidunt, hic, vel fugit voluptas molestiae minima aliquid, sapiente sunt id eveniet sequi dignissimos! Exercitationem amet molestias repellendus laudantium blanditiis excepturi, est quod voluptas eos, temporibus perferendis dolores animi deleniti mollitia quidem ab autem iusto deserunt. Fugiat nemo a corrupti itaque autem laborum quaerat similique totam adipisci sequi reprehenderit sapiente ducimus, tenetur odio blanditiis eum nostrum dolorum quis aliquid quos non quasi. Facilis provident, beatae eos atque praesentium, quis id velit quae minima officia ad quam labore exercitationem nulla, repudiandae eligendi quia quos mollitia odit a amet sunt. Qui quod, modi unde sed delectus corrupti odio ipsa iure, beatae non suscipit et, ipsam placeat eos magni. Veritatis ipsum repudiandae consequatur maiores nisi error reiciendis aperiam. Totam quam fuga minima, quasi magnam ducimus aliquam, id voluptate laboriosam deserunt dolorem dolore veritatis dolores at. Debitis non voluptatem mollitia laudantium itaque molestiae, ea, aperiam dolor voluptatum corporis tenetur distinctio nemo dignissimos suscipit magnam excepturi. Reprehenderit dolorem, iure saepe expedita ducimus est officiis itaque, hic quidem quia dolore eveniet cumque sapiente. Sapiente laborum enim id! Consequatur sit nesciunt nobis sint tempora odit possimus voluptates, alias nemo repellendus labore, facere architecto temporibus, et molestiae culpa deserunt ut itaque ipsam! Ipsam autem in sequi odit. Ex, unde sint culpa hic omnis quidem tempore quasi natus. Placeat laborum magnam dicta ex quae vel libero iure, architecto inventore. Ducimus repellat neque doloremque praesentium maxime excepturi eaque quo cum accusantium veritatis voluptas nam aspernatur sunt eveniet vitae unde beatae est deserunt, animi et mollitia illum ex enim. Autem eum exercitationem eos sunt dicta quasi magni quidem dolor, recusandae repudiandae fuga ullam asperiores qui in minima aliquam possimus laudantium pariatur voluptatem perferendis hic iste amet nihil. Qui eaque saepe totam temporibus quis rerum rem, in labore nisi dignissimos perferendis repellendus minus velit earum consequatur ea ex. Quos nemo pariatur ratione minima harum. Rerum repellendus totam id magni labore aliquid consectetur quo numquam praesentium! Dolore voluptate aliquid dolores eligendi perferendis? Autem tempora explicabo, nesciunt excepturi ipsum porro deserunt inventore sed delectus optio accusantium in numquam, dolorem beatae perspiciatis. Placeat, voluptatibus atque suscipit rerum cupiditate commodi nobis cum harum quod expedita beatae dolorum libero voluptatum voluptates repudiandae fugit. Voluptas voluptatibus at suscipit explicabo similique sequi distinctio nostrum error dignissimos perspiciatis provident cupiditate odio possimus beatae hic iusto ipsa sunt necessitatibus officiis aut, soluta sint! Molestiae odit numquam, vitae soluta consequatur, ullam animi nisi minus quaerat voluptate tempora omnis non quis similique ipsum rem rerum blanditiis ipsam cum. Ratione dolor quae porro officia architecto aperiam accusamus consequuntur. A fugiat eaque provident hic, rem molestias iure. A molestiae neque tempora, quos ex quasi maxime hic mollitia facere quas aliquid, odit aspernatur repudiandae, corrupti itaque quia unde enim laboriosam harum et delectus! Recusandae distinctio dignissimos suscipit magnam repudiandae nesciunt dolorem perspiciatis vitae ea beatae sequi quisquam in reiciendis ipsam voluptatum, accusamus quia debitis doloribus qui, commodi corrupti iste consequuntur. Ad alias nulla illo sapiente, iusto praesentium voluptas a consequatur dolor commodi magnam. Quia consequuntur nesciunt cum id numquam fuga saepe nihil at ipsa commodi!

    </AppWrapper>
  );
};

export default App;
