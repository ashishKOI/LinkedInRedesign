import React, {useState} from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import {Divider, useTheme} from "react-native-paper";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import {useNavigation} from "@react-navigation/native";

const Posts = ({name, description, avatar, image, reposted, ...props}) => {
    const {colors} = useTheme();
    const [isExpanded, setIsExpanded] = useState(false);
    const navigation = useNavigation();

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <View>
            {reposted && (
                <>
                    <View
                        style={{
                            paddingHorizontal: 16,
                            paddingVertical: 4,
                            flexDirection: "row",
                            gap: 10,
                            alignItems: "center",
                        }}
                    >
                        <Image
                            source={{
                                uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                            }}
                            style={{height: 28, width: 28, borderRadius: 50}}
                        />
                        <Text
                            style={{
                                color: colors.primaryText,
                                fontSize: 14,
                                fontWeight: "400",
                            }}
                        >
                            Amr Elthomy reposted this
                        </Text>
                    </View>
                    <Divider/>
                </>
            )}

            {/*Post header*/}
            <PostHeader name={name} avatar={avatar}/>

            {/* POst Description */}

            <View style={{marginTop: 5, paddingHorizontal: 16}}>
                <Text
                    style={{
                        fontSize: 13,
                        color: colors.primaryText,
                        fontWeight: "400",
                        overflow: "hidden",
                        lineHeight: 15,
                    }}
                    numberOfLines={isExpanded ? undefined : 2}
                >
                    {description}
                </Text>
                {description.length > 90 && !isExpanded && (
                    <TouchableOpacity onPress={toggleExpand}>
                        <Text style={{color: colors.primaryText, fontWeight: "600"}}>
                            ... see more
                        </Text>
                    </TouchableOpacity>
                )}
                {isExpanded && (
                    <TouchableOpacity onPress={toggleExpand}>
                        <Text style={{color: colors.primaryText, fontWeight: "600"}}>
                            see less
                        </Text>
                    </TouchableOpacity>
                )}
            </View>

            {/* Images */}
            {image && (
                <TouchableOpacity
                    onPress={() => navigation.navigate("PostDetail")}
                    activeOpacity={0.8}
                    style={{marginTop: 5}}
                >
                    <Image
                        source={{
                            uri: image,
                        }}
                        style={{
                            width: "100%",
                            height: 390,
                        }}
                    />
                </TouchableOpacity>
            )}

            {/* Post footer */}
            <PostFooter/>

            <Divider/>
        </View>
    );
};

export default Posts;
