import { StyledFormPanel, Wrapper } from "./styled";
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
        <Wrapper>
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
        </Wrapper>
      </StyledFormPanel>
      {formPanelStatus && <Backdrop />}
    </>
  );
};

export default FormPanel;
