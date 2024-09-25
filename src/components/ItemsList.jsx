import { List, ListItem } from "@tremor/react";
import AddGameForm from "./addgame/Form";
import CommonButton from "./ui/CommonButton";
import Modal from "./ui/Modal";
export default function ItemsList({ items, setGames }) {
	return (
		<>
			<List className="mt-2 ">
				{items.map((item) => (
					<ListItem key={item.name}>
						<span>{item.name}</span>
						<span className="actions">
							<CommonButton className="text-black">
								🗑
							</CommonButton>
						</span>
					</ListItem>
				))}
			</List>
      <Modal buttonType="add" buttonText="agregar" btnClass="text-black">
          <AddGameForm
            setGames={setGames}
            games={items}
          />
        </Modal>
		</>
	);
}
