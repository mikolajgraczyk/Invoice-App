import { StyledFormPanel } from "./styled";
import { Backdrop } from "../Backdrop";
import { useSelector } from "react-redux";
import { selectFormPanelStatus } from "../../features/invoices/invoicesSlice";
import { useEffect } from "react";

const FormPanel = () => {
  const formPanelStatus = useSelector(selectFormPanelStatus);

  useEffect(() => {
    formPanelStatus
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [formPanelStatus]);

  return (
    <>
      <StyledFormPanel formPanelStatus={formPanelStatus}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          scelerisque diam non porta eleifend. Aenean ac tincidunt enim. Ut
          maximus quam in nisi placerat, non sollicitudin magna mollis. Nulla id
          fermentum magna. In porttitor augue ut cursus feugiat. Mauris tempor
          sem erat, eu tempus augue vulputate eget. Etiam tristique ut felis ac
          luctus. Cras hendrerit risus sollicitudin, molestie turpis at, lacinia
          sapien. In tempor turpis erat, a imperdiet sem vulputate at. Sed arcu
          lorem, dapibus at purus id, vulputate dignissim eros. Suspendisse
          semper vehicula pretium. Nunc quis efficitur nisi. Mauris ornare ante
          vel feugiat posuere. Mauris porta tempus mi, a lobortis velit mollis
          porttitor. Vestibulum efficitur fringilla dapibus. Aenean ultricies
          ipsum mollis, vehicula nisi non, bibendum tellus. Nam malesuada a
          ipsum eget ultricies. Maecenas tristique lectus sagittis, viverra quam
          sit amet, aliquet massa. Praesent et felis eu nisl eleifend tincidunt
          ac at metus. Fusce eu urna nunc. Sed sit amet magna eleifend felis
          aliquet aliquam eu tincidunt dolor. Aliquam vehicula leo ac eros
          eleifend posuere. Vestibulum consequat sem eu erat suscipit lobortis.
          Etiam vitae luctus nunc. Pellentesque tincidunt vel nunc luctus
          molestie. Donec in orci ut velit commodo ornare sit amet sit amet
          velit. Phasellus in laoreet nisl. Etiam gravida consequat lacus non
          semper. Donec fringilla orci lectus, ac pellentesque neque fermentum
          eu. Fusce sit amet eros odio. Nunc imperdiet ut diam quis faucibus.
          Quisque id gravida augue. Integer laoreet risus purus, at sagittis
          massa porttitor ac. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Phasellus quis consequat ante. Morbi viverra molestie turpis
          quis blandit. Sed et eleifend enim, ut scelerisque dui. Ut vitae leo
          metus. Vestibulum quis urna hendrerit, efficitur purus id, feugiat
          libero. Integer libero metus, varius ut tempor sit amet, maximus
          mattis erat. Pellentesque ex sem, ultricies euismod dolor vitae,
          tincidunt laoreet dui. Nam non condimentum mauris, at vehicula turpis.
          Proin neque orci, auctor et dictum eget, vulputate non enim. Quisque
          vel neque odio. Cras porttitor, eros et semper dapibus, mi sapien
          pellentesque eros, sed facilisis arcu metus sodales lectus. Nullam
          auctor sed velit ut maximus. Vivamus ex sem, varius eu scelerisque ac,
          mattis volutpat libero. Integer in tortor eget felis elementum finibus
          sed quis arcu. Nam suscipit odio vitae sodales maximus. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Quisque orci felis, sagittis ac lacus sit amet,
          venenatis suscipit metus. Pellentesque ac bibendum lectus, a ornare
          nisi. Nam non nibh elementum, tristique velit eu, commodo magna.
          Pellentesque eget laoreet justo, sed ullamcorper lectus. Sed et erat
          consectetur, varius est vel, ultrices enim. Nullam non nulla ultrices
          libero rutrum facilisis. Sed a metus blandit, iaculis elit eu,
          eleifend ligula. Donec tincidunt nulla purus, at consequat mi congue
          quis. Aliquam scelerisque commodo turpis, in eleifend nisl euismod id.
          Proin ac tortor sit amet metus porta interdum a eget urna. Vivamus
          lorem diam, scelerisque sit amet justo interdum, finibus aliquam sem.
          Mauris augue nisl, dictum imperdiet leo et, hendrerit vulputate ante.
          Nulla eros odio, dapibus sit amet neque sit amet, maximus gravida
          lorem. Aliquam in dolor metus. Fusce sit amet orci eget orci suscipit
          hendrerit. Etiam volutpat dapibus augue, pharetra ullamcorper urna
          euismod eget. Phasellus viverra vehicula mattis. Mauris sit amet
          lectus eget tortor rhoncus hendrerit vitae vitae velit. Mauris vitae
          tellus tempus augue ultrices euismod a nec lacus. Suspendisse ut diam
          metus. Quisque suscipit tincidunt ipsum ut condimentum. Nullam vitae
          feugiat dui. Donec gravida ligula sed tincidunt molestie. Phasellus
          ornare ligula ut nisi consectetur facilisis. Duis condimentum laoreet
          odio a fermentum. Donec sollicitudin enim nulla, ac tempor justo
          placerat in. Quisque quis dapibus turpis, vel consequat sem. Proin
          fermentum eros urna, eu convallis justo commodo nec. Mauris a arcu non
          diam pellentesque ornare vel vel orci. Fusce vitae lobortis dolor. In
          eget magna ante. In hac habitasse platea dictumst. Fusce nec lorem
          lorem. Donec molestie velit vitae mi tempor, sit amet semper neque
          luctus. In et mauris ac metus lobortis vestibulum. Vivamus commodo
          neque purus, vitae imperdiet urna vehicula sagittis. Aenean dolor
          libero, convallis non neque maximus, faucibus pulvinar justo. Nunc
          accumsan in turpis quis blandit. Morbi fermentum, elit eget iaculis
          semper, purus magna tincidunt urna, eu tempor nulla sapien sit amet
          odio. Donec finibus a ipsum id mattis. Fusce in mattis felis.
          Curabitur hendrerit, sapien non hendrerit placerat, ex ex porttitor
          erat, vitae congue quam orci egestas turpis. Nulla pellentesque
          placerat urna, sed euismod arcu condimentum id. Maecenas auctor dui
          odio, a ultricies nisi dictum ac. Praesent id sem eu nibh malesuada
          maximus in non tellus. In efficitur tincidunt nibh, vitae hendrerit
          felis viverra nec. Donec ornare orci in mauris tincidunt aliquam.
          Nulla elementum sapien a venenatis venenatis. Fusce ac efficitur mi.
          Sed pellentesque quam tortor, eget aliquet velit rhoncus at. Fusce eu
          mattis velit. Aliquam erat volutpat. Sed in fringilla lectus.
          Vestibulum in condimentum ligula. Mauris eu nisi et est ultricies
          bibendum eu ut libero. Morbi eu velit quis velit rutrum lacinia ac eu
          arcu. Quisque placerat ex ut quam venenatis, auctor molestie augue
          venenatis. Curabitur vehicula sit amet metus nec venenatis. In posuere
          rutrum magna quis imperdiet. Ut mollis, erat at tempor consectetur,
          eros magna posuere sem, eu tincidunt felis dolor eget risus. Nam
          pretium nec sapien egestas gravida. Cras a suscipit massa, facilisis
          pharetra libero. Nulla tristique facilisis sodales. Curabitur
          tincidunt auctor purus, non tempus quam aliquam nec. Donec in quam
          accumsan, tempor turpis in, ornare eros. Etiam suscipit nibh
          venenatis, iaculis mauris eget, feugiat ante. Fusce laoreet arcu
          faucibus mollis pulvinar. Nulla convallis ante vel porta fermentum.
          Fusce ut lacinia tortor. Sed eget pulvinar tellus, ac venenatis ex.
          Pellentesque egestas varius tellus non auctor. Nullam gravida
          facilisis risus et congue. Mauris gravida, nisi quis semper
          ullamcorper, lorem lacus tempor ligula, in pellentesque ante diam
          facilisis nibh. In commodo tempor finibus. Maecenas nec massa at sem
          elementum tincidunt dignissim in quam. Maecenas mollis massa dolor,
          interdum elementum tortor lacinia suscipit. Sed auctor ac risus id
          sagittis. Morbi molestie hendrerit risus, non tempor leo blandit at.
          Nunc faucibus, ante quis mattis mattis, risus est viverra leo, non
          semper mi tortor sit amet orci. Donec id justo nisi. Etiam eget sapien
          ac dolor iaculis scelerisque a sit amet mauris. Vestibulum et purus
          dolor. Phasellus convallis sagittis nisl non pellentesque. Aenean
          volutpat augue lectus, ultricies congue quam porta sed. Donec cursus
          metus non varius elementum. Donec in urna lacus. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. Aliquam at turpis vitae orci tempus varius id bibendum
          libero. Cras pellentesque est ac velit sagittis tempor. Phasellus
          gravida velit in congue laoreet. Nulla facilisi. Duis suscipit risus
          sed varius ullamcorper. Sed auctor fringilla bibendum. Integer in urna
          ut leo consequat ullamcorper ac a magna. Nam dignissim nisi laoreet
          enim imperdiet fermentum. Nulla pretium leo non magna mattis accumsan.
          Ut eu aliquam ex. Integer vitae elit est. Maecenas scelerisque
          bibendum magna in volutpat. Phasellus sed porta mi, eu bibendum nulla.
          Proin tincidunt ullamcorper diam, quis suscipit risus bibendum vitae.
          Suspendisse sagittis risus in neque tempor, in cursus ipsum consequat.
          Vivamus pretium metus a augue ultricies, ac feugiat libero luctus.
          Aenean porttitor egestas ipsum non molestie. Sed ac ullamcorper erat.
          Vestibulum molestie elementum eleifend. In sollicitudin dolor eget
          nulla consectetur placerat sit amet vitae massa. Aliquam vehicula
          tellus ex, a pharetra dui aliquam sit amet. Nunc vestibulum vulputate
          nibh in lobortis. Praesent vestibulum lacus eget augue iaculis,
          molestie efficitur arcu tristique. Donec tincidunt interdum rutrum.
          Donec sollicitudin lacus ac tortor accumsan, placerat iaculis metus
          imperdiet. Maecenas vestibulum dignissim leo, eget condimentum massa
          imperdiet ut. Pellentesque id sapien nec neque rutrum vehicula et eget
          ex. Aliquam erat volutpat. Praesent vulputate est congue velit
          tincidunt, a malesuada odio tincidunt. Nam cursus turpis vitae libero
          aliquet fermentum. Ut vulputate interdum magna sit amet euismod.
          Integer vestibulum neque purus, et ultricies nisi suscipit porta.
          Phasellus eu tempus dolor. Sed sit amet dolor bibendum metus efficitur
          pellentesque vitae quis nisl. Nulla facilisi. Aenean quis maximus
          nunc, ullamcorper venenatis lectus. Nullam et sodales arcu. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Phasellus et nisl consectetur, cursus tortor et, ultrices nunc.
          Vivamus blandit quis arcu non facilisis. Vivamus in nunc quam.
          Curabitur tempus risus a imperdiet ultricies. In consequat odio sit
          amet enim efficitur, ac euismod dui placerat. Nullam mattis imperdiet
          nisi, quis rutrum mi iaculis sed. Aliquam erat volutpat. Vestibulum
          pharetra eu urna id viverra. Ut id tellus ut ante tempus gravida id
          nec diam. Quisque egestas risus non tincidunt pellentesque. Cras
          lectus purus, tincidunt non tempor eu, laoreet nec nisi. Sed eget
          gravida metus. Cras sit amet tortor egestas, efficitur orci placerat,
          ultricies justo. Aenean vel tincidunt ex, vitae congue quam. Sed eu
          pharetra elit, id commodo est. Sed quis condimentum erat, in fringilla
          mi. Integer scelerisque sem at erat cursus, at euismod nisl
          ullamcorper. Aenean vitae lectus at metus fermentum rhoncus sed in
          dui. Curabitur iaculis libero nunc, sit amet pulvinar ipsum luctus sit
          amet. Sed eget fringilla risus, a mollis tortor. Vivamus sollicitudin
          tellus ac pharetra egestas. Proin dignissim, neque posuere ultricies
          rhoncus, ante tortor sodales metus, at gravida metus diam quis diam.
          Suspendisse interdum venenatis felis sit amet laoreet. Aliquam
          accumsan urna vel mi tempor tristique. Sed eleifend dignissim
          scelerisque. Nulla eleifend a arcu ac rutrum. Integer ornare magna
          finibus malesuada dictum. Quisque non faucibus purus. Praesent mollis,
          felis accumsan viverra porta, felis libero rhoncus diam, sed volutpat
          risus elit in nisl. Phasellus id fermentum lacus. Nullam fermentum
          augue in luctus hendrerit. Etiam nisl diam, tristique eget quam vel,
          euismod commodo nunc. Etiam convallis consequat fermentum. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Suspendisse pretium
          maximus molestie. Vivamus maximus tincidunt tincidunt. In id
          scelerisque purus. Proin rhoncus a tellus ut sagittis. Aliquam id
          volutpat sapien. Integer placerat tellus et dui cursus feugiat.
          Curabitur pulvinar ut sapien ut pellentesque. Phasellus convallis
          facilisis vehicula. Phasellus sit amet enim enim. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Mauris sed elit
          vitae nisl mattis imperdiet. Morbi laoreet, purus sit amet tincidunt
          pulvinar, augue arcu tempus eros, ac semper erat neque non lorem.
          Nullam egestas velit ac feugiat facilisis. Suspendisse elementum, nunc
          vel laoreet ultricies, ante mi ultricies urna, non malesuada mauris
          dui vel eros. Nunc scelerisque, nunc pretium placerat aliquam, odio
          metus luctus nisl, quis porttitor odio sapien ac arcu. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Sed fermentum nisl quis libero rhoncus, in imperdiet ex
          laoreet. In vel velit mauris. Nunc vitae convallis orci. In finibus id
          est aliquam rhoncus. Quisque a metus non magna feugiat tincidunt.
          Morbi ac nulla quis ex auctor finibus at non leo. Nullam vitae ante
          nec elit feugiat aliquam. Nam molestie justo quam, ac suscipit lectus
          vehicula in. Vestibulum eu nunc ultrices, hendrerit nisl in, molestie
          metus. Nam tristique aliquet ante. Aenean vitae odio sit amet metus
          convallis consectetur quis eget tellus. Vestibulum id urna euismod,
          sodales ante quis, porta mi. Nulla quis velit ante. Nam eu luctus
          lectus, eget sollicitudin libero. Aliquam scelerisque porttitor arcu,
          cursus vulputate sapien ultrices sit amet. Sed gravida tristique enim,
          ut ultrices elit eleifend nec. Nam non purus eget justo lobortis
          imperdiet egestas eu nisl. Nullam in nisl augue. Nulla lectus diam,
          interdum at orci at, vulputate congue lacus. Donec rhoncus eget sem
          eget efficitur. Curabitur eget ultrices mi. Nam accumsan felis in
          gravida commodo. Aliquam at elit sapien. Donec sodales massa
          tristique, ornare magna vel, dapibus purus. Integer nec mollis lacus,
          in ullamcorper turpis. Vivamus vestibulum, arcu vel congue consequat,
          ligula tortor elementum ex, a dictum quam nisl quis ante. Sed iaculis
          metus elit, in pharetra massa vestibulum tincidunt. Aenean
          sollicitudin nibh arcu, porta molestie tortor malesuada eget. Nulla
          faucibus sollicitudin convallis. Quisque lacus augue, pretium egestas
          tincidunt eget, aliquet vel enim. Morbi eget ex pellentesque, eleifend
          ligula non, maximus neque. Phasellus ornare, diam eu posuere
          condimentum, magna enim condimentum orci, sit amet suscipit sapien
          felis id est. Duis sollicitudin finibus augue, ut commodo elit
          pulvinar consectetur. Maecenas id odio purus. Maecenas augue ligula,
          eleifend et luctus eget, interdum et arcu. Nulla arcu massa, dapibus
          at sodales accumsan, porta a turpis. Nulla volutpat est sit amet
          turpis posuere maximus sed ac sem. Sed eu dignissim nisl, non cursus
          nibh. Nam sagittis diam ac molestie ornare. Pellentesque sed cursus
          velit, in ultricies mauris. In imperdiet, libero eu luctus semper,
          ipsum elit egestas erat, sed hendrerit magna metus ac nulla. Ut
          egestas est leo, ac tincidunt metus molestie ac. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Aenean facilisis velit vitae
          fringilla porttitor. Quisque consectetur blandit lacinia. Aenean
          tempor magna eget sem fermentum, nec porttitor tortor vehicula.
          Maecenas urna sapien, efficitur at facilisis eget, suscipit non nisi.
          Cras eu nunc ut leo eleifend rhoncus. Ut accumsan nulla non quam
          pulvinar, in aliquet tortor commodo. Nunc volutpat lacus libero, eu
          cursus dolor ultrices et. Sed dignissim velit ac urna condimentum
          malesuada. Pellentesque sodales, diam sit amet molestie facilisis, dui
          sapien commodo neque, et sagittis orci nibh ac est. Maecenas fermentum
          maximus porttitor. In in sagittis odio. Donec convallis rutrum est non
          efficitur. Quisque hendrerit enim in sollicitudin consequat. Nullam
          non metus a nulla vehicula mollis sit amet nec massa. Morbi in nisl
          nisi. Suspendisse pulvinar nunc ex. Pellentesque eu mattis lacus.
          Integer dapibus lectus sit amet augue luctus, at tempus ipsum pretium.
          In sed tortor ipsum. Nunc faucibus tincidunt diam ac vehicula. Proin
          auctor semper augue non tempor. Etiam a commodo sapien. Donec ac
          pulvinar arcu. Phasellus condimentum diam ac luctus ultrices. Mauris
          mi nibh, ullamcorper a nunc non, accumsan commodo orci. Sed at
          volutpat mauris. Vestibulum vel cursus orci, sit amet hendrerit est.
          Pellentesque a interdum eros, ac convallis massa. Praesent tempus
          lacus sed dolor pellentesque condimentum. Vestibulum in egestas nulla,
          sed vulputate metus. Pellentesque nec tellus nisl. Aliquam a hendrerit
          dolor. Proin a facilisis arcu, in iaculis erat. Vestibulum consequat
          arcu at vehicula finibus. Ut euismod diam sit amet purus ullamcorper,
          eget vestibulum eros cursus. Nam vestibulum, dui nec aliquam
          tincidunt, dui est aliquet risus, et eleifend arcu ligula dictum
          magna. Donec lacinia feugiat finibus. Ut faucibus, mauris id dapibus
          consequat, magna risus elementum ex, nec elementum lectus ipsum id
          felis. Fusce leo felis, vulputate id nibh volutpat, condimentum
          vehicula nibh. Vestibulum a tincidunt tortor. Integer vel eros a eros
          ultrices tempus in in dui. Aliquam finibus lobortis sem, id venenatis
          sapien molestie sit amet. Nam id nunc at nunc aliquet ultricies vel
          sit amet mi. Nunc volutpat erat ut imperdiet blandit. Suspendisse quis
          mauris laoreet felis aliquam porttitor eu vitae purus. Fusce egestas
          neque sit amet consequat posuere. Suspendisse a malesuada ipsum. Donec
          lobortis risus et nisi efficitur efficitur. Nulla orci tortor,
          efficitur ac enim non, mattis scelerisque nisl. Cras id ante arcu.
          Nullam dapibus turpis et elementum maximus. Quisque in accumsan nulla,
          ultrices ultrices mauris. Vivamus vitae eros eget lacus hendrerit
          finibus. Morbi volutpat sapien a augue ultrices commodo. Sed non mi ac
          erat tristique ornare pretium ut purus. Phasellus congue ex et purus
          lobortis, at semper lorem facilisis. Pellentesque id lectus sed ante
          blandit eleifend. Curabitur accumsan consectetur risus. Ut non ipsum
          accumsan, placerat lacus vitae, rhoncus nulla. Vivamus cursus luctus
          turpis, tempor egestas nisl ultricies bibendum. Curabitur at varius
          mi, in vestibulum diam. Donec vel eros eu lacus viverra gravida quis
          in risus. Quisque ac pharetra arcu. Donec placerat purus nisl, non
          maximus nunc ullamcorper varius. Vivamus est diam, tincidunt in massa
          eu, rutrum faucibus nisl. Praesent vitae gravida turpis. Donec non
          dignissim ex, et dignissim sapien. Fusce et blandit tortor.
          Suspendisse nec pellentesque metus, eget convallis arcu. Duis id
          suscipit ligula. Sed et lacus odio. Nulla nec lectus nisl. Morbi
          faucibus lacus non neque fermentum fermentum. Aliquam eu libero justo.
      </StyledFormPanel>
      {formPanelStatus && <Backdrop />}
    </>
  );
};

export default FormPanel;
